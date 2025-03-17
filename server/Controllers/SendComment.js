import nodemailer from "nodemailer";
import dotenv from 'dotenv';
dotenv.config();
function SendEmail({sender,comment}) {
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
      replyTo:sender,
      to: process.env.MY_EMAIL,
      subject:`A comment from ${sender}`,
      html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Comment</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: #007bff;
            color: #ffffff;
            text-align: center;
            padding: 10px 0;
            font-size: 20px;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 15px;
            font-size: 16px;
            color: #333;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
            padding-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            New User Comment
        </div>
        <div class="content">
         
            <p><strong>Email:</strong> {${sender}}</p>
            <p><strong>Comment:</strong></p>
            <p>{${comment}}</p>
        </div>
        <div class="footer">
            <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
    };transporter.sendMail(mail_configs, function (error,info) {
      if (error) {
        console.log(error);
        return reject({message:"An error has occured"});
      } return resolve({message:"Email sent successfully"});
    })
  })
};

export const SendEmailcommentToUser= async(req,res,next) =>{
  SendEmail(req.body)
  .then((response) => res.send(response.message))
  .catch((error) => res.status(500).send(error.message));
}