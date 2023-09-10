import mongoose from "mongoose";

const loginSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true,
}

);


export const login=mongoose.model('login',loginSchema)