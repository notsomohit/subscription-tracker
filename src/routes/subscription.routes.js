import { Router } from "express";
import { createSubscription,getUserSubscription,getAllSubscriptions } from "../controllers/susbscription.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/",authorize,getAllSubscriptions);

subscriptionRouter.get("/:id",(req,res) => {
    res.send({ title: "get subscription details"});
});

subscriptionRouter.post("/",authorize,createSubscription);

subscriptionRouter.put("/:id",(req,res) => {
    res.send({ title: "update subscription"});
});

subscriptionRouter.delete("/:id",(req,res) => {
    res.send({ title: "delete subscription"});
});

subscriptionRouter.get("/user/:id",authorize,getUserSubscription);

subscriptionRouter.put("/:id/cancel",(req,res) => {
    res.send({ title: "cancel subscription"});
});

subscriptionRouter.get("/upcoming-renewals",(req,res) => {
    res.send({ title: "get upcoming renewals"});
});



export default subscriptionRouter;