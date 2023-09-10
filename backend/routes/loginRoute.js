import express from 'express';
import { login } from '../models/loginModel.js';
import bcrypt from 'bcrypt';
const router=express.Router();


router.post('/find',(req,res)=>{
    const {email,password}=req.body;
    login.findOne({email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                   res.json("success")
                }else{
                    res.json("it is correct password")
                }
            })
        }else{
            res.json("no record existed");
        }
    })


})



router.post('/register',async (req,res)=>{
    const { email ,password }=req.body;
    bcrypt.hash(password,10).then(hash=>{
        login.create({email,password:hash})
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
    }).catch(err=>console.log(err.message))
})


export default router;