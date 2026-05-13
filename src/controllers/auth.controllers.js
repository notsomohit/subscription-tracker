import mongoose from "mongoose";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_SECRET_EXPIRY } from "../../config/env.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUsers = await User.create([{ name, email, password: hashedPassword }],{ session });

        // create token
        const token = jwt.sign({ userId: newUsers[0]._id },JWT_SECRET,{ expiresIn: JWT_SECRET_EXPIRY });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0],
            },
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};

export const signIn = async (req, res, next) => {
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
        }

        const isPasswordValid = await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            const error = new Error("password is not valid");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({userId:user._id},JWT_SECRET,{expiresIn:JWT_SECRET_EXPIRY});

        res.status(200).json({
            success: true,
            message: "user signed in successfully",
            data:{
                token,
                user
            }
        });

    } catch (error) {
        next(error);
    }

};

export const signOut = async (req, res, next) => {

};