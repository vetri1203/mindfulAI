import { recModel } from "../Schema/uploadRec.js";

export const recruitment = async (request, response) => {
    try {
        const {title,company,mail, job, skills, experience, description } = request.body;

        if ( !title || !company || !mail || !job || !skills || !experience || !description) {
            response.status(400).send({message:"Enter all details to post the job"});
            return;
        }

        const jobPost = new recModel({
            jobTitle : title,
            company : company,
            mail :mail,
            jobType: job,
            skills: skills,
            experince: experience,
            Description: description
        });
        try{
            await jobPost.save();
            response.status(200).send({message : "Job posted"});
        }
        catch(err) 
        {
            response.status(500).send({message : err});
        }
        
    } catch (err) {
        response.status(500).send({message : err});
    }
};
