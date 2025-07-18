 
import {validationResult} from 'express-validator'

 export const validate  = (req,res,next)=>{
const errors = validationResult(req);

if(errors.isEmpty()){
    return next()
}

const extractedError = []
errors.array().map((err)=>extractedError.push(
    {
        [err.path]:err.msg
    }))

 const error = new Error("Received data is not valid");
  error.statusCode = 422;
  error.details = extractedError;
  return next(error);

}