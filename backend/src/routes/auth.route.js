import express from 'express'
import { changeCurrentPassword,updateProfile, forgotPasswordRequest, getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, resendEmailVerification, resetForgotPassword, verifyEmail,getAllUsers } from '../controllers/auth.controller.js';
import {validate} from '../middlewares/validator.middleware.js'
import {userLoginValidator, userRegistrationValidator } from '../validators/auth.js'

import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register',userRegistrationValidator(),validate,registerUser);
router.post('/login',userLoginValidator(),validate,loginUser);
router.delete('/logout',protectRoute,logoutUser);

router.get('/verify/:unhashedToken', verifyEmail);
router.post('/resendEmailVerification',protectRoute,resendEmailVerification);

router.post('/refreshAccessToken',refreshAccessToken);

router.post('/forgotPassword',forgotPasswordRequest);
router.post('/resetPassword/:unhashedToken',resetForgotPassword);

router.post('/changeCurrentPassword',protectRoute,changeCurrentPassword);

router.get('/currentUser',protectRoute,getCurrentUser);

router.post('/updateProfile',protectRoute,updateProfile)

router.get('/all',protectRoute,getAllUsers);


export default router