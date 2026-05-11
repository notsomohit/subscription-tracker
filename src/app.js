import express from "express";
import { PORT } from "../config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import SubcriptionRouter from "./routes/subscription.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth",authRouter);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/subscriptions",SubcriptionRouter);


app.get("/",(req,res) => {
    res.send(`welcome to Subcription Tracker API`);
});

export default app;