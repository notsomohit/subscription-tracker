import mongoose from "mongoose";
import User from "../models/user.model";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_SECRET_EXPIRY } from "../../config/env";

export const signUp = async(req,res,next) =>{
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const {name,email,password} = req.body;

        //check if user already exists
        const existingUser = await User.findOne({email});

        if(existingUser){
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUsers = await user.create([{name,email,password:hashedPassword}],{session});
        const token = JWT_SECRET.sign({userId: newUsers[0]._id}, JWT_SECRET,{expiresIn: JWT_SECRET_EXPIRY});
        await session.commitTransaction();

        session.endSession(201).json({
            success: true,
            message: "user created successfully",
            data: {
                token,
                user: newUsers[0],
            }
        });
        res.status()

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

export const signIn = async(req,res,next) =>{

};


export const signOut = async(req,res,next) =>{

};

