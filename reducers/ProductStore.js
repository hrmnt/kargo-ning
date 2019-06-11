import { GET_PRODUCTS, SET_PRODUCT } from "../types";

const initialState = {
  products: [],
  currentProduct: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.results
      };
    case SET_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      };
    default:
      return state;
  }
}
