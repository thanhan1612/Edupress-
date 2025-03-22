import { Router } from "express";
import { paymentconfig } from "../Controllers/Payment.js";
import { paymentintent } from "../Controllers/Payment.js";
const PaymentRouter = Router();
PaymentRouter.get("/config",paymentconfig);
PaymentRouter.post("/create-payment-intent", paymentintent)
export default PaymentRouter;