import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
   
    userEmail: {
      type: String
      
    },
    userPassword: {
      type: String
     
    },
    userFirstName :{
      type:String
    },
    userLastname :{
      type:String
    },
    userPhoneNumber :{
      type :String
    }
   
  }
);

export const signupModel = new mongoose.model("signupDatas", userSchema);

