import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import router from "./routes/rodoRoute.js";

dotenv.config();
const app = express();
const port  = 3000;




app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router)


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log("connected to db")})
.catch(err=>{console.log(err.message)})

app.listen(port, ()=>{
    console.log(`app is listen at port ${port}`)
})