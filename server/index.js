import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import TodoRoutes from "../server/routes/TodoRoutes.js";
import path from 'path'
dotenv.config();

const PORT=process.env.PORT||5000;
const __dirname=path.resolve();
const app = express();
app.use(cors());
app.use(express.json());
await mongoose.connect("mongodb://localhost:27017/todo")
.then(()=>console.log("mongoose connected"))
.catch((error)=>console.log(error));

app.use("/api",TodoRoutes)
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
})


