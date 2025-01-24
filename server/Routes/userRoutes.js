import express from 'express'
import { checkEmail, signUpUser } from '../Controllers/SignUpController.js';
import { signInUser } from '../Controllers/SignInController.js';
import { SendEmailToUser } from '../Controllers/SignInController.js';
import { ChangePassword } from '../Controllers/SignInController.js';
const userRouters = express.Router();

userRouters.post('/signUpUser',checkEmail,signUpUser);
userRouters.post('/signInUser',signInUser);
userRouters.post('/otpsend',SendEmailToUser);
userRouters.post('/changePassword',ChangePassword);

export default userRouters;
