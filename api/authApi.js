import { url } from "../constants";
import axios from "axios";

const signUpApi =  user => {
   axios
    .post(`${url}/authentication/register/`, user)
    .then(response => {
      console.log("response", response);
      return response;
    })
    .catch(err => {
      return err;
    });
};


const signInApi =  user => {
  axios
   .post(`${url}/api/token-auth/`, user)
   .then(response => {
     console.log("response", response);
     return response;
   })
   .catch(err => {
     return err;
   });
};

export { signUpApi, signInApi };
