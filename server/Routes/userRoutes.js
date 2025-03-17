import express from 'express'
import { checkEmail, signUpUser } from '../Controllers/SignUpController.js';
import { signInUser } from '../Controllers/SignInController.js';
import { SendEmailToUser } from '../Controllers/SignInController.js';
import { ChangePassword } from '../Controllers/SignInController.js';
import { SendEmailcommentToUser } from '../Controllers/SendComment.js';
import getCourses from '../Controllers/ManageCourses.js';
import { userMiddlewares } from '../Middlewares/userMiddlewares.js';
import { getCourseDetails } from '../Controllers/ManageCourses.js';
import { findInstructorbyCourse } from '../Controllers/Instructor.js';
const userRouters = express.Router();

userRouters.post('/signUpUser',checkEmail,signUpUser);
userRouters.post('/signInUser',signInUser);
userRouters.post('/otpsend',SendEmailToUser);
userRouters.post('/changePassword',ChangePassword);
userRouters.post('/getInstructor',findInstructorbyCourse)
userRouters.get('/courses',getCourses);
userRouters.post('/contact',userMiddlewares,SendEmailcommentToUser);
userRouters.get('/courses/:CourseTitle',getCourseDetails);

export default userRouters;
