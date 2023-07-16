import mongoose from "mongoose";


const scholarship = new mongoose.Schema({
    mail:{
        type :String
    },
    jd :{
        type :String,
        requried :true
    }
});

export const schorlshipModel = new mongoose.model("schorlshipModel",scholarship);