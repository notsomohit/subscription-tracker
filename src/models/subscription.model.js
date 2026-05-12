import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Subscription name is required"],
            trim:true,
            maxLength:100,
            minLength:2,
        },
        price:{
            type:Number,
            required:[true,"subscription price is required"],
            min:[0,"price must be greater than 0"],
        },
        currency:{
            type: Number,
            enum: ["USD","EUR","RS"],
            default: "USD",
        },
        frequency:{
            type: String,
            enum: ["daily","weekly","monthly","yearly"],
        },
        category:{
            type: String,
            enum: ["sports","news","entertainment","lifestyle","technology","finance","politics"],
            required: true,
        },
        payementMethod:{
            type:String,
            required: true,
            trim:true,
        },
        status:{
            type:String,
            enum: ['active',"cancelled","expired"],
            default: "active",
        },
        startDate:{
            type: Date,
            required: true,
            validate: {
                validator: (value) => value <= new Date(),
                message:"start date must be in the past",
            }
        },
        renewalDate:{
            type: Date,
            required: true,
            validate: {
                validator: (value) => value > this.startDate,
                message:"start date must be in the past",
            }
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
            trim:true,
        },
    }, {timestamps:true}
);

subscriptionSchema.pre("save",function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };
        
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.renewalPeriods]);
    };

    if(this.renewalDate < new Date()){
        this.status = "expired";
    }
    next();
});

const Subcription = mongoose.model("Subscription",subscriptionSchema);

export default Subcription;