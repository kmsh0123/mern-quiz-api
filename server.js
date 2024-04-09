import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.get("/api/quiz",(req,res)=>{
    res.send("Hello Get Method");
});

app.post("/api/quiz",(req,res)=>{
    res.send("Hello Post Method");
});

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
