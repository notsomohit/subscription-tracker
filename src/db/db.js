import mongoose from "mongoose"

import {DB_URI,NODE_ENV} from "../../config/env.js"

if(!DB_URI){
    throw new Error("please define the DB_URI environment variable inside .env.<development>.local");
};

export const connectDB = async() => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`you've succesfully connected to the database in ${NODE_ENV}`)
    } catch (error) {
        console.error("error connecting to database",error);
        process.exit(1);
    }
}