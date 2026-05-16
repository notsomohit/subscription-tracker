import Subscription from "../models/subscription.model.js";
import { ApiError } from "../utils/api-errors.js";
import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

export const createSubscription = asyncHandler(async(req,res) => {
    const subscription = await Subscription.create(
        {
            ...req.body,
            user:req.user._id
        }
    );
    res.status(201).json(new ApiResponse(
        201,
        "subscrition was successfully created",
        {
            data:subscription
        }
    ))
});

export const getSubscriptions = asyncHandler(async(req,res) =>{
    
    const subscription = await Subscription.find({user:req.user._id});

    res.status(200).json(new ApiResponse(
        200,
        "subscriptions succesfully fetched",
        {
            data:subscription
        }
    ));

});

export const getSubscriptionById = asyncHandler(async(req,res) => {
    const subscription = await Subscription.findById(req.params.id)
    
    if(!subscription){
        throw new ApiError(404,"subscription not found");
    }

    if(!req.user._id.equals(subscription.user)){
        throw new ApiError(403,"Unauthorized access");
    }

    res.status(200).json(new ApiResponse(
        200,
        "subscription succesfully fetched",
        {
            data:subscription
        }
    ));

});