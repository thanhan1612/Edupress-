import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModels from "../Models/userModels.js";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();


export const signInUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user = await UserModels.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      success: true,
      message: "Sign-in successful!",
      user: {
        userId: user._id,
        userName: user.userName,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const signInAdmin = async (req, res, next) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required." });
      }
  
      const user = await UserModels.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password." });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password." });
      }
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      res.status(200).json({
        success: true,
        message: "Sign-in successful!",
        admin: {
          userId: user._id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      next(error);
    }
  };
function SendEmail({recepient_email,OTP}) {
  return new Promise((resolve,reject)=> {
    var transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user:process.env.MY_EMAIL,
        pass:process.env.MY_PASSWORD
      }
    });
    const mail_configs = {
      from :process.env.MY_EMAIL,
      to: recepient_email,
      subject:"PASSWORD RECOVERY FOR EDUPRESS",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - OTP Email Template</title>
  

</head>
<body>
<!-- partial:index.partial.html -->
<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Edupress Team</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for using Edupress. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
    <p style="font-size:0.9em;">Regards,<br />Edupress Team</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Edupress Inc</p>
      <p>VietNam</p>
      
    </div>
  </div>
</div>
<!-- partial -->
  
</body>
</html>`,
    };transporter.sendMail(mail_configs, function (error,info) {
      if (error) {
        console.log(error);
        return reject({message:"An error has occured"});
      } return resolve({message:"Email sent successfully"});
    })
  })
};
export const SendEmailToUser= async(req,res,next) =>{
  SendEmail(req.body)
  .then((response) => res.send(response.message))
  .catch((error) => res.status(500).send(error.message));
}
export const ChangePassword = async(req,res,next) => {
  const {email , newPassword} = req.body;
  try{
    
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(newPassword,salt);
    const updatedUser = await UserModels.findOneAndUpdate(
      { email: email }, 
      { password: hashPassword}, 
      { new: true } 
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    };
    res.status(200).send({
      message:"Successfully changed",
      updatedUser
    })
    
    
  } catch(error) {
    res.status(500).send(error.message);
  } 
}