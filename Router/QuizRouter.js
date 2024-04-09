import express from 'express';

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Hello Get Method");
})

router.post("/",(req,res)=>{
    res.send("Hello Post Method");
})

export default router;