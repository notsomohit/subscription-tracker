import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || `development`}.local`});

export const {
    PORT,
    NODE_ENV,
    DB_URI,
    JWT_SECRET,
    JWT_SECRET_EXPIRY,
    ARCJET_KEY,
    ARCJET_ENV
} = process.env;

//token -> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTA0YTQ2MjViZTBhY2JkY2I3YWE1NTUiLCJpYXQiOjE3Nzg2ODkxMjIsImV4cCI6MTc3ODc3NTUyMn0.2ir4jNfbfIz9QmE3Wvq3HA0f4UcJZbVDr8f_g0hOJ2g 
// //_id -> 6a04a4625be0acbdcb7aa555

