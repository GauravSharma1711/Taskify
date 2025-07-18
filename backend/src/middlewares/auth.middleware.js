import jwt from 'jsonwebtoken'

 export const protectRoute = async(req,res,next)=>{

   try {
     const {accessToken} = req.cookies
 
     if(!accessToken){
         return res.status(404).json({error:"AccessToken missing"});
     }
 
     const decoded = await jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
 
        if(!decoded){
         throw new ApiError(403,"Unauthorized")
       }
 
       req.user={
         id:decoded._id,
         email:decoded.email,
       }
 
         next();
 
   } catch (error) {
      console.error('JWT Error:', error);
       return res.status(403).json({ error: 'Invalid or expired token' });
   }

}

