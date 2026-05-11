import app from './app.js';

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`subscription tracker api is listening on port:${port}`);
});
