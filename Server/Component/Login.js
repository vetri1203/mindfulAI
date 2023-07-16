
import { signupModel } from "../Schema/userData.js";
// import bcrypt from "bcrypt";


export const login = async (request, response) => {

  try {
    const {mail,pass}  = request.body
    if (!mail || !pass) {
      response.status(400).send({message:"enter all details"});
      return;
    }


    const user = await signupModel.findOne({ userEmail: request.body.mail });

    if (user) {
      if (user.userPassword === pass) {
        response.status(200).send({message:"ok"});
      }
      else {
        response.status(400).send({message:"password not matched"});
      }
    }
    else {
      response.status(400).send({message:"no user found"});
    }
  }
  catch (err) {
    response.status(500).send({message:err})
  }

}