import { aj } from "../../config/arcjet.js";

export const arcjetMiddleware = async (req,res,next) => {
    try {
        const decision = await aj.protect(req,{requested:1});

        if(decision.isDenied()){
            if(decision.reason.isRateLimit()) return res.status(429).json({error:"rate limit exceeded"});
            if(decision.reason.isBot()) return res.status(403).json({error:"bot detected"});
            
            return res.status(403).json({error:"access denied"});
        }
        next();
    } catch (error) {
        console.log("arcjet middleware Error");
        next(error);
    }
};