import { Router } from "express";

const userRouter = Router();

userRouter.get("/",(req,res) => {
    res.send({title:"get all users"});
});

userRouter.get("/:id",(req,res) => {
    res.send({title:"get user details"});
});


userRouter.post("/",(req,res) => {
    res.send({title:"create a new user"});
});

userRouter.put("/:id",(req,res) => {
    res.send({title:"update user"});
});


userRouter.delete("/:id",(req,res) => {
    res.send({title:"delete all users"});
});

export default userRouter;