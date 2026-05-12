import app from './app.js';
import connectDB from './db/db.js';
const port = process.env.PORT;

app.listen(port,async()=>{
    console.log(`you're listening to Subscription Tracker API on http://localhost:${port}`);
    await connectDB();
});

