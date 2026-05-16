import express from "express";
import cookieParser from "cookie-parser";
import Subscription from "./models/subscription.model.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use("/api/v1/auth",authRouter);

app.get("/",(req,res) => {
    res.send(`welcome to Subcription Tracker API`);
});

export default app;