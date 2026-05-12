import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,"user name is required"],
            trim: true,
            minLength:2,
            maxLength: 50,
        },
        email:{
            type: String,
            required: [true,"user email is required"],
            trim: true,
            unique: true,
            lowercase: true,
            match: [/\S+@\S+\.S+/,"please enter a valid email address"],
        },
        password:{
            type:String,
            required: [true,"user password is required"],
            minLength:6,
        },
    },{timestamps:true}
);

const User = mongoose.model("User",userschema);

export default User;