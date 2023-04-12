import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan from 'morgan'
import router from './Router/Router.js';

const app = express();

app.use(morgan("dev"));
app.use(cors({origin:"*"}));    
app.use(express.json({limit:"50mb", extended:true}));
app.use(express.urlencoded({limit:"50mb",extended:true}));
app.use('/posts',router);
app.use("/public",express.static("public"));

const port = process.env.PORT || 8000;

const URL = "mongodb+srv://admin:admin@cluster0.gqswntx.mongodb.net/Inventory?retryWrites=true&w=majority";

mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(()=>app.listen(port,()=>{
    console.log(`Server is runing on port: ${port}`);
    console.log("Backend Connected to the DataBase.");
}))
.catch((error)=>{
    console.log(error.message);
});