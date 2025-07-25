import mongoose from "mongoose"

import jwt from 'jsonwebtoken'

import crypto from 'crypto'
import {AvailableUserRoles,UserRoleEnum} from '../utils/constants.js'

const userSchema = new mongoose.Schema({

avatar:{
   type:{
  url:String,
  localpath:String,
   },
   deault:{
      url:`https://ui-avatars.com/api/?name=John+Doe
`
   }
   
},
username:{
   type:String,
   required:true,
   unique:true,
   lowerCase:true,
   trim:true,
   index:true,
},
email:{
   type:String,
   required:true,
   unique:true,
   lowerCase:true,
   trim:true,
   
},
fullName:{
   type:String,
   required:true,
},
password:{
   type:String,
   required:true,
},
 role:{
       type:String,
       enum:AvailableUserRoles,
       default:UserRoleEnum.MEMBER
     },
isEmailVerified:{
   type:Boolean,
   default:false,
},
forgotPasswordToken:{
    type:String,
},
forgotPasswordExpiry:{
    type:Date, 
},
refreshToken:{
   type:String,
},
emailVerificationToken:{
    type:String,
},
emailVerificationExpiry:{
    type:Date, 
},
   },
   
   {timestamps:true})


   userSchema.methods.generateAccessToken = function (){
   return  jwt.sign(
         {
            _id: this._id,
            email:this.email
         },
         process.env.ACCESS_TOKEN_SECRET,
         {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
         }
      )
   };


    userSchema.methods.generateRefreshToken = function (){
   return  jwt.sign(
         {
            _id: this._id,
          
         },
         process.env.REFRESH_TOKEN_SECRET,
         {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
         }
      )
   };

   userSchema.methods.generateTemporaryToken = function(){
     const unhashedToken =  crypto.randomBytes(20).toString("hex");

     const hashedToken = crypto.createHash("sha256").update(unhashedToken).digest("hex");

     const tokenExpiry = Date.now()+(20*60*1000);

     return {hashedToken,unhashedToken,tokenExpiry}

   }




   export const User = mongoose.model("User",userSchema);