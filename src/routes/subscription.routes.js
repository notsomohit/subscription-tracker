
import express from "express";
import {createSubscription,getSubscriptions,getSubscriptionById/*,updateSubscription,deleteSubscription*/} from "../controllers/subscription.controller.js";

import { authorize } from "../middleware/auth.middleware.js";

const subscriptionRouter = express.Router();

//CRUD routes
subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/", authorize, getSubscriptions);

subscriptionRouter.get("/:id", authorize, getSubscriptionById);

// subscriptionRouter.put("/:id", authorize, updateSubscription);

// subscriptionRouter.delete("/:id",  authorize, deleteSubscription);

export default subscriptionRouter;