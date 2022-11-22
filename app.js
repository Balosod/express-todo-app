import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todoRoute.js";
import dbUrl from "./configs/dbConfig.js"

const app = express();
const port  = 3000;




app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',todoRouter)


mongoose.connect(dbUrl)
.then(()=>{console.log("connected to db")})
.catch(err=>{console.log(err.message)})

app.listen(port, ()=>{
    console.log(`app is listen at port ${port}`)
})