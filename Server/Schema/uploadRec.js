import mongoose from "mongoose";


const rec = new mongoose.Schema(
    {
        jobTitle : {
            type :String
        },
        company: {
            type: String
        },
        mail: {
            type: String
        },
        jobType: {
            type: String
        },
        skills: {
            type: String
        },
        experince: {
            type: String
        },
        Description: {
            type: String
        }
    }
);



export const recModel = new mongoose.model("recModel", rec);