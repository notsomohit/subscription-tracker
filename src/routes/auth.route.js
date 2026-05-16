import { Router } from "express";
import { signUp,logIn,logOut} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up",signUp);
authRouter.post("/log-in",logIn);
authRouter.post("/log-out",logOut);

export default authRouter;