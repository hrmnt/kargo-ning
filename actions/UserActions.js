import axios from "axios";
import { url } from "../constants";
import {  GET_PROFILE } from "../types";

export const getProfile = () => dispatch => {
  console.log(dispatch);
  axios
    .get(`http://217.160.57.150/api/authentication/profile/`,{
        headers:{
            "Authorization":"JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywidXNlcm5hbWUiOiI4Nzc3ODg4Nzc4OCIsImV4cCI6MTU2MDc1NTMxNCwicGhvbmUiOiI4Nzc3ODg4Nzc4OCIsIm9yaWdfaWF0IjoxNTYwMTUwNTE0fQ.l5wj_qmvesXBlsnwMFXaxihu4c07bSARPpqtjXMT47s"
        }
    })
    .then(response => {
      const { data } = response;
      console.log(data);
      dispatch(fetchProfile(data));
    })
    .catch(err => {
      console.log(err)  
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const changePassword = (data) => dispatch =>{
  axios
    .patch(`http://217.160.57.150/api/authentication/profile/`,data)
    .then(response => {
      const { data } = response;
      console.log(data);
      dispatch(fetchProfile(data));
    })
    .catch(err => {
      console.log(err)  
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
}
export const setCurent = product => {
  return {
    type: SET_PRODUCT,
    payload: product
  };
};

export const fetchProfile = data => {
  return {
    type: GET_PROFILE,
    payload: data
  };
};
