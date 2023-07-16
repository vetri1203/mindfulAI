import { signupModel } from "../Schema/userData.js";



export const signup = async (request, response) => {
    try {
    const user = await signupModel.findOne({ userEmail: request.body.mail });

    
        if (user) {
            response.status(400).send({message:"User already exists"});
        }
        else {
            if(!(request.body.mail
                &&request.body.pass
                &&request.body.fname
                && request.body.lname
                && request.body.phone))
                {
                    response.status(400).send({message:"enter all details"});
                }
                else{
                    const data =await new signupModel({
                        userEmail :request.body.mail,
                        userPassword :request.body.pass,
                        userFirstName : request.body.fname,
                        userLastname : request.body.lname,
                        userPhoneNumber : request.body.phone    
                    }
                    );
                    console.log(data);
                    try{
                    await data.save();
                        response.status(200).send({message:"User registered successfully"})
                    }
                    catch(err){
                        response.status(500).send({message :err});
                    }

                }
            // console.log(request.body);
            
        }
    }
    catch (err) {
        response.status(500).send({message :err});

    }
}

