import { recModel } from "../Schema/uploadRec.js";

export const search = async (request, response) => {
  try {
    const filter = { jobTitle: request.body.job };

    const data = await recModel.find(filter);

    if (data) {
      response.send(data);
    } else {
      response.send("No job found");
    }
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
};
