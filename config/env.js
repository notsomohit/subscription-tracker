import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || `development`}.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_SECRET_EXPIRY
} = process.env;