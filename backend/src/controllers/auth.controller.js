import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import { sendMail } from "../utils/mail.js";
import {emailVerificationMailGenContent,forgotPasswordMailGenContent} from '../utils/mail.js'
import { setCookie } from "../utils/setCookie.js";
import jwt from 'jsonwebtoken'
import crypto from 'crypto';


const registerUser = async(req,res)=>{

  try {
      const {username,email,fullName,password,role} = req.body;

     const existingUser = await User.findOne({email});

     if(existingUser){
      return res.status(409).json({ error: "User already exists" });
     }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = new User({
      username,
      fullName,
      email,
     password: hashedPassword,
      role
    })

      const {hashedToken,unhashedToken,tokenExpiry} = await user.generateTemporaryToken();
      user.emailVerificationToken = hashedToken;
      user.emailVerificationExpiry = tokenExpiry;

    const verificationUrl = `${process.env.BASE_URL}/api/v1/auth/verify/${unhashedToken}`;

   sendMail({
   email:user.email,
   subject:"verify email account",
   mailgenContent:emailVerificationMailGenContent(
    username,
    verificationUrl
   )

   
  })
  
  await user.save();

  return res.status(201).json({message:"User created Succesfully"});


  } catch (error) {
     console.log("Error in registerUser:", error);
  return res.status(500).json({ error: "Internal server error" });
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //validation
  
 try {
   const user = await User.findOne({email});
 
   if(!user){
     return res.status(404).json({error:"User does not exist"});
   }
 
   const isPasswordCorrect = await bcrypt.compare(password,user.password);
 
 if(!isPasswordCorrect){
   return res.status(403).json({error:"Unauthorized"});
 }
 
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();
 
  setCookie(res,accessToken,refreshToken);
 
  user.refreshToken  = refreshToken;
 
  await user.save();
 
  return res.status(200).json({message:"Logged in successfully"});
 
 } catch (error) {
  console.log("Error in loginUser:", error);
return res.status(500).json({ error: "Internal server error" });

 }

};

const logoutUser = async (req, res) => {
 
 const user = await User.findById(req.user.id);


  if(user){
user.refreshToken = null;
await user.save();
  }

     res.clearCookie("accessToken",{
        httpOnly: true,
    sameSite: "Strict",
    })

    res.clearCookie("refreshToken", {
        httpOnly: true,
        sameSite: "Strict",
      });


  return res.status(200).json({message:"User logged out successfully"});
  
};

const verifyEmail = async (req, res) => {
    
     const unhashedToken  = req.params.unhashedToken;

     const user = await User.findOne({
      emailVerificationToken: crypto.createHash("sha256")
            .update(unhashedToken)
            .digest("hex"),

            emailVerificationExpiry:{$gt:Date.now()},
     })

     if(!user){
      return res.status(403).json({error:"Unauthorized"});
     }

     user.isEmailVerified=true;
     user.emailVerificationToken=null;
     user.emailVerificationExpiry=null;

     await user.save();

     return res.status(200).json({message:"User verified successfully"});

};




const resendEmailVerification = async (req, res) => {

  try {
    
    const userId = req.user.id;

    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({error:"User not found"});
    }

    if(user.isEmailVerified){
      return res.status(400).json({message:"User is already verified"});
    }

    const {unhashedToken,hashedToken,tokenExpiry} = await user.generateTemporaryToken();
    const verificationUrl = `${process.env.BASE_URL}/auth/verify/${unhashedToken}`;

    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpiry = tokenExpiry;

    await user.save();

    sendMail({
        email: user.email,
        subject: "Verify Your Email Account",
        mailgenContent: emailVerificationMailGenContent(user.username, verificationUrl),
    });

    return res.status(200).json({message:"resend email sent successfully"});

  } catch (error) {
    console.log("Error in resendEmail verification",error);
    return res.status(500).json({error:"Internal server error"});
    
  }

};


const refreshAccessToken = async (req, res) => {
   
     const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

     if(!incomingRefreshToken){
      return res.status(401).json({error:"unauthorized"})
     }

     try {
      const decoded = await jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET);
 
      if(!decoded){
       return res.status(403).json({error:"Invalid refresh token"});
      }
 
      const user = await User.findById(decoded?._id);
 
      if(!user ||  (user.refreshToken!==incomingRefreshToken)){
       return res.status(401).json({error:"invalid user or token missing"});
      }
 
      const newAccessToken = await user.generateAccessToken();
      const newRefreshToken = await user.generateRefreshToken();
 
      user.refreshToken = newRefreshToken;
      await user.save();
 
     setCookie(res,newAccessToken,newRefreshToken);
     
      return res.status(200).json({message:"accessToken refreshed successfully"});
 
     } catch (error) {
      return res.status(401).json({error:"Invalid refresh token"});
     }
};




const forgotPasswordRequest = async (req, res) => {
  
   try {
      const {email} = req.body;
 
      const user = await User.findOne({email});
 
      if(!user){
       return res.status(404).json({error:"No user found"});
      }
 
      const {unhashedToken,hashedToken,tokenExpiry} =await user.generateTemporaryToken()
      user.forgotPasswordToken=hashedToken;
      user.forgotPasswordExpiry=tokenExpiry;
 
      await user.save();
 
      const username = user.username;
      const passwordResetUrl = `${process.env.BASE_URL}/auth/resetPassword/${unhashedToken}`
 
      sendMail({
       email:user.email,
       subject:"Reset your password",
       mailgenContent:forgotPasswordMailGenContent({
         username,
         passwordResetUrl,
       })
      })
 
      return res.status(200).json({message:"forgot password mail sent"});

   } catch (error) {
    console.log("error in forgotpasswordrequest controller",error);
    return res.status(500).json({error:"Internal server error"});
   }

};

const resetForgotPassword = async(req,res)=>{
  try {
    
    const {password} = req.body;

    const unhashedToken = req.params.unhashedToken;

    const hashedToken = crypto.createHash("sha256")
        .update(unhashedToken)
        .digest("hex")

        const user = await User.findOne({
          forgotPasswordToken:hashedToken,
          forgotPasswordExpiry:{$gt:Date.now()}
        })

        if(!user){
          return res.status(400).json({error:"invalid or expires token"});
        }

          user.password = await bcrypt.hash(password,10);
          user.forgotPasswordToken = undefined;
          user.forgotPasswordExpiry = undefined;

        await user.save();

        return res.status(200).json({ message: "password reset successful" });

  } catch (error) {
    console.log("error in resetPassword controller",error);
    return res.status(500).json({error:"Internal server error"});
  }
}

const changeCurrentPassword = async (req, res) => {
  const {password, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.id);
  
          if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

        const userPassword = user.password;
  
        const isPasswordMatch = await bcrypt.compare(password,userPassword);
  
        if(!isPasswordMatch){
          return res.status(400).json({error:"Incorrect password"})
        }
  
        user.password  = await bcrypt.hash(newPassword,10);
  
        await user.save();
  
        return res.status(200).json({message:"Password changed successfully"});


    } catch (error) {
      console.log("Error in changeCurrentPassword controller",error);
      return res.status(500).json({error:"Internal server error"});
    }  
};

const getCurrentUser = async (req, res) => {
  const user = req.user;

  if(!user){
    return res.status(401).json({error:"no user found please login"});
  }

  const currentUser = await User.findById(req.user.id).select('-password -refreshToken');


  return res.status(200).json({currentUser});
};

export {
  changeCurrentPassword,
  forgotPasswordRequest,
  resetForgotPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  resendEmailVerification,
  verifyEmail,

};
