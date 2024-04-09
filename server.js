import express from "express";
import dotenv from "dotenv";
import { deleteQuizId, getQuiz, getQuizId, postQuiz, putQuizId } from "./controller/Quizcontroller.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const port = process.env.PORT;
const dbConnect = process.env.MONGO;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/api/quiz",getQuiz);

app.get(`/api/quiz/:id`,getQuizId);

app.post("/api/quiz",postQuiz);

app.put("/api/quiz/:id",putQuizId);

app.delete("/api/quiz/:id",deleteQuizId);

mongoose.connect(dbConnect).then(()=>{
    console.log("DB_Connected");
}).catch((e)=>{
    console.log(e);
})

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
