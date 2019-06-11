import { SIGN_UP, GET_ERRORS, SIGN_IN } from "../types";
import {AsyncStorage} from "react-native";
import { url } from "../constants";
import axios from "axios";

export const signUp = user => dispatch => {
  console.log(user,dispatch)
  axios
    .post(`${url}/authentication/register/`, user)
    .then(response => {
      const { data } = response;
      dispatch(fetchUserSignUp(data));
    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

export const signIn = user => dispatch => {
  console.log("user",user)
  axios
    .post(`${url}/token-auth/`, user)
    .then(response => {
      const { data } = response;
      console.log(data);
      AsyncStorage.setItem("token", data.token)
      console.log(AsyncStorage.getItem("token"))
      axios.defaults.headers.common.Authorization = `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywidXNlcm5hbWUiOiI4Nzc3ODg4Nzc4OCIsImV4cCI6MTU2MDc1NTMxNCwicGhvbmUiOiI4Nzc3ODg4Nzc4OCIsIm9yaWdfaWF0IjoxNTYwMTUwNTE0fQ.l5wj_qmvesXBlsnwMFXaxihu4c07bSARPpqtjXMT47s`;
      dispatch(fetchUserSignIN(data));
    })
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
};

export const fetchUserSignUp = decoded => {
  return{
    type: SIGN_UP,
    payload: decoded,
  }

};

export const fetchUserSignIN = decoded => {
  return{
    type: SIGN_IN,
    payload: decoded,
  }

};

