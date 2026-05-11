import express from "express";
import { PORT } from "../config/env.js";

const app = express();

app.get("/",(req,res) => {
    res.send(`welcome to Subcription Tracker API`);
});

export default app;