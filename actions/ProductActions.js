import axios from "axios";
import { url } from "../constants";
import { GET_PRODUCTS, SET_PRODUCT, GET_ERRORS, SET_SELLER } from "../types";

export const getProducts = () => dispatch => {
  console.log(dispatch);
  axios
    .get(`http://217.160.57.150/api/products/products/`)
    .then(response => {
      const { data } = response;
      console.log(data);
      dispatch(fetchProducts(data));
    })
    .catch(err => {
      console.log(err)  
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
export const getProfile =(id) => {
  axios
    .get(`http://217.160.57.150/api/authentication/profile/${id}`)
    .then(response => {
      const { data } = response;
      console.log(data);
      dispatch(fetchSeller(data));
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

export const fetchProducts = data => {
  return {
    type: GET_PRODUCTS,
    payload: data
  };
};


export const fetchSeller = (data) =>{
  return{
    type: SET_SELLER,
    payload:data
  }
}