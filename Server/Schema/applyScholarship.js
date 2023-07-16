import mongoose from "mongoose";


const apply = new mongoose.Schema({
    mail : 
    {
        type:String
    },
    tenMarkSheet : {
        data : Buffer,
        contentType : String
    },
    twethMarkSheet  :{
        data : Buffer,
        contentType :String
    },
    aadhar : {
        data : Buffer,
        contentType :String
    },
    pan : {
        data : Buffer,
        contentType :String
    },
    brith : {
        data : Buffer,
        contentType :String
    }

});

export const applySchema = new mongoose.model("applyModel",apply);