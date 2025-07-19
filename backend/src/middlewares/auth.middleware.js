import jwt from 'jsonwebtoken'

 export const protectRoute = async(req,res,next)=>{

   try {
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
 
     if(!token){
         return res.status(404).json({error:"AccessToken missing"});
     }
 
     const decoded =  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
 
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

