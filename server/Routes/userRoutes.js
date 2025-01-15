import express from 'express'
import { checkEmail, signUpUser } from '../Controllers/SignUpController.js';
const userRouters = express.Router();

userRouters.post('/signUpUser',checkEmail,signUpUser);

export default userRouters;
