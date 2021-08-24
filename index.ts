import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/TWM',{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
    console.log("connected SuccessFully")
}).catch(()=>{
    console.log("Not Connected")
})

app.use("/user",userRouter)

app.listen(5000,()=>{
    console.log("Server is up")
})