import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up",(req,res) =>{
    res.send({message:"sign-up"});
});

authRouter.post("/sign-in",(req,res) =>{
    res.send({message:"sign-in"});
});

authRouter.post("/sign-out",(req,res) =>{
    res.send({message:"sign-out"});
});

export default authRouter;