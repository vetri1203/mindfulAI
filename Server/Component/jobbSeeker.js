


import { seekModel } from "../Schema/jobSeeker.js";
import multer from "multer"; 

export const seeker = async (request, response) => {
    try {
        const storage = multer.diskStorage({
            destination: "uploadImage",
            filename: (req, file, callback) => {
                callback(null, file.originalname);
            },
        });

        const upload = multer({
            storage: storage,
        }).single("cv");

        upload(request, response, async (err) => {
            if (err) {
                response.status(500).send({ message: err });
            } else {
                const body = request.body
                const data = new seekModel({
                    fname: body.first,
                    lname: body.last,
                    mail: body.mail,
                    phoneNumber: body.phoneNumber,
                    experience: body.experience,
                    salary: body.salary,
                    skills: body.skills,
                    cv: {
                        data: request.file,
                        contentType: "application/pdf",
                    },
                });

                // Save the data to the database
                await data.save();
                response.status(200).send({ message: "Job application submitted" });
            }
        });
    } catch (err) {
        response.status(500).send({ message: err });
    }
};
