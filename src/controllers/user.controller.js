import User from "../models/user.model.js"
import bcrypt from "bcryptjs";

export const getUsers = async(req,res,next) => {
    try {
        const users = await User.find();
        res.status(200).json({success:true,data:users});
    } catch (error) {
        next(error);
    }
};

export const getUser = async(req,res,next) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        
        if(!user){
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({success:true,data:user});
    } catch (error) {
        next(error);
    }
};

export const createUser = async(req,res,next) => {
    try {
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email});
        
        if(existingUser){
            const error = new Error("user already exists");
            error.statusCode = 409;
            throw error;
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = await  User.create([{name,email,password: hashedPassword}]);

        res.status(200).json({
            success: true,
            message: "user created successfully",
            data:{
                user
            }
        });

    } catch (error){
        next(error);
    }
}