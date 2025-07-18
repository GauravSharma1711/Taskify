import {body} from 'express-validator'

const userRegistrationValidator = ()=>{
    return [

        body('email')
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),

            body('username')
            .trim()
            .notEmpty().withMessage("Username is required")
            .isLength({min:3}).withMessage("Username must be atleast 3 character long")
            .isLength({max:13}).withMessage("Username must be maximum 13 character long"),

            body('fullName')
            .trim()
            .notEmpty().withMessage("fullName is required"),

            body('role')
            .trim()
            .notEmpty().withMessage("Role is required"),


            body('password')
            .notEmpty().withMessage("Password cannot be empty")
            .isLength({min:6}).withMessage("Password must be atleast 6 character long")  

    ]
}

const userLoginValidator = ()=>{
    return [
  
        body('email')
        .trim()
        .isEmail().withMessage("Email is Invalid")
        .isEmpty().withMessage("Email is required"),

        body('password')
        .notEmpty().withMessage("Password cannot be empty")
        .isLength({min:6}).withMessage("password must be atleast 6 character long")


    ]
}

export {userRegistrationValidator,userLoginValidator}