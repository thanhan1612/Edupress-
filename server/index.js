import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";




import userRouters from "./Routes/userRoutes.js";
import { errorMiddlewares } from "./Middlewares/errorMiddlewares.js";
import adminRouters from "./Routes/adminRoutes.js";
import PaymentRouter from "./Routes/payment.js";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit:"25mb"}));
app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow_Origin","*");
  next();
})

app.use('/api/users', userRouters)
app.use('/api/admins', adminRouters)
app.use('/api/payment',PaymentRouter)

app.use(errorMiddlewares);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});