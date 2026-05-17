import { aj } from "../../config/arcjet.js";
import { ApiError } from "../utils/api-errors.js";
import { asyncHandler } from "../utils/async-handler.js";

export const arcjetMiddleware = asyncHandler(async (req,res,next) => {

    const decision = await aj.protect(req, { requested: 1 });

    if(decision.isDenied()){

        if(decision.reason.isRateLimit()){
            throw new ApiError(403,"rate limit exceeded");
        }

        if(decision.reason.isBot()){
            throw new ApiError(403,"bot detected");
        }

        throw new ApiError(403,"access denied");
    }

    next();
});