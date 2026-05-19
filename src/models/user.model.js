import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type:String,
            required:[true,"user name is reuired"],
            trim:true,
            lowerCase:true,
            minLength:2,
            maxLength:50,
        },

        email:{
            type:String,
            required:[true,"user email is reuired"],
            trim:true,
            lowerCase:true,
            minLength:2,
            maxLength:50,
            match: [/\S+@\S+\.\S+/,"please enter a valid email address"],
        },

        password:{
            type:String,
            required: [true,"user password is required"],
            minLength:6,
        },

    },{timestamps:true}
);

const User = mongoose.model("User",userSchema);
//commit
export default User;