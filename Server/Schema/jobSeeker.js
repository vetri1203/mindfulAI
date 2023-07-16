import mongoose from "mongoose";

const seeker = new mongoose.Schema(
    {

        //name,mail,phone,exp,cv,skills


        fname : {
            type : String,
           
        },
        lname : {
            type : String,
            
        },
        mail: {
            type : String,
           

        },
        phoneNumber : {
            type : String,
           
        },
        skills : {

            type : String,
            
        },
        experince : {
            type : String,
           
        },
        salary : {
            type : String
        },

        cv: {
            data :Buffer,
            contentType : String

        }
    }
);


export const seekModel  = new mongoose.model("seekmodel",seeker);