import { Router } from "express";

const SubcriptionRouter = Router();

SubcriptionRouter.get("/",(req,res) => {
    res.send({ title: "get all subscription"});
});

SubcriptionRouter.get("/:id",(req,res) => {
    res.send({ title: "get subscription details"});
});

SubcriptionRouter.post("/",(req,res) => {
    res.send({ title: "create subscription"});
});

SubcriptionRouter.put("/:id",(req,res) => {
    res.send({ title: "update subscription"});
});

SubcriptionRouter.delete("/:id",(req,res) => {
    res.send({ title: "delete subscription"});
});

SubcriptionRouter.get("/user/:id",(req,res) => {
    res.send({ title: "get all user ubscriptions"});
});

SubcriptionRouter.put("/:id/cancel",(req,res) => {
    res.send({ title: "cancel subscription"});
});

SubcriptionRouter.get("/upcoming-renewals",(req,res) => {
    res.send({ title: "get upcoming renewals"});
});



export default SubcriptionRouter;