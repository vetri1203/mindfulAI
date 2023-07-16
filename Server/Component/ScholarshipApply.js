import { applySchema } from "../Schema/applyScholarship.js";
import multer from "multer";

export const apply = async (request,response) => {
    try{
        const ten = multer.diskStorage({
            destination: "XthSheet",
            filename: (req, file, callback) => {
                callback(null, file.originalname);
            },
        });

        const tweth = multer.diskStorage({
            destination: "XIISheet",
            filename: (req, file, callback) => {
                callback(null, file.originalname);
            },
        });

        const upload = multer({
            storage: {ten,tweth},
        }).single("details");

        upload(request,response, async(err)=>{
            if(err)
            {
                response.status(500).send({ message: err });
            }
            else{
                const data = new applySchema({
                    tenMarkSheet : {
                        data: request.file,
                        contentType: "application/pdf",
                    },
                    twethMarkSheet : {
                        data: request.file,
                        contentType: "application/pdf",
                    }
                })
            }
        })
    }
    catch(err) {
        response.status(500).send({message:err});
    }
}