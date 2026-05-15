import { Router } from "express";
import { getUser, getUsers, createUser } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/",authorize,getUsers);

userRouter.get("/:id",authorize,getUser);


//create a new user{later add only for admins}
userRouter.post("/",createUser);

userRouter.put("/:id",(req,res) => {
    res.send({title:"update user"});
});


userRouter.delete("/:id",(req,res) => {
    res.send({title:"delete all users"});
});

export default userRouter;