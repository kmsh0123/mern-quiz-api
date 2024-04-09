import express from "express";
import dotenv from "dotenv";
import Router from "../backend/Router/QuizRouter.js"

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use("/api/quiz",Router);

app.use("/",(req,res)=>{
    res.send({message : "Hello From NodeJs Api"})
})

app.listen(port,(e)=>{
    if(e){
        console.log(e);
    }else{
       console.log(`Server on port ${port}`); 
    }
})
