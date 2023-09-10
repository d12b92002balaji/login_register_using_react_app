import express from "express";
import {PORT,mongoDBURL}from './config.js';
import cors from 'cors';
import loginRoute from './routes/loginRoute.js'
import mongoose from "mongoose";


const app =express();

app.use(express.json());

app.use(cors());


app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('welcome to mern stack tutorial');
})

app.use('/login',loginRoute)

mongoose.connect(mongoDBURL).then(()=>{
    console.log(`app connect to database `);
    app.listen(PORT,()=>{
        console.log(`app is listening to port :${PORT}`);
    });
}).catch((error)=>{
    console.log(error)
})
