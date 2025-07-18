import express from 'express'
import { changeCurrentPassword, forgotPasswordRequest, getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, resendEmailVerification } from '../controllers/auth.controller.js';
import {validate} from '../middlewares/validatr.middleware.js'
import {userLoginValidator, userRegistrationValidator } from '../validators/auth.js'

import {protectRoute} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/register',userRegistrationValidator(),validate,registerUser);
router.post('/login',userLoginValidator(),validate,loginUser);
router.delete('/logout',protectRoute,logoutUser);

router.post('/resendEmailVerification',protectRoute,resendEmailVerification);
router.post('/refreshToken',refreshAccessToken);
router.post('/forgotPassword',forgotPasswordRequest);

router.post('/changeCurrentPassword',protectRoute,changeCurrentPassword);

router.get('/currentUser',protectRoute,getCurrentUser);


export default router