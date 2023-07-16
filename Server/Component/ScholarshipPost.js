import { schorlshipModel } from "../Schema/scholarshipSchema.js";
export const scholarship = async (request, response) => {
    try {
        const { mail, jd } = request.body;

        if (!mail || !jd) {
            response.status(400).send({ message: "Please enter all details" });
            return;
        }

        const post = new schorlshipModel({
            mail: mail,
            jd: jd,
        });

        try {
            await post.save();
            response.send({ message: "Posted" });
        } catch (err) {
            response.status(500).send({ message: err });
        }
    } catch (err) {
        response.status(500).send({ message: err });
    }
};
