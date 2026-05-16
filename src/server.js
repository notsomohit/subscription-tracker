import app from './app.js';
import { PORT } from "../config/env.js";
import { connectDB } from './db/db.js';


connectDB()
    .then(() => {
        app.listen(PORT,() => {
            console.log(`you're listening to ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("mongoDB connection error");
        process.exit(1);
    })
