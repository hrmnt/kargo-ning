import { GET_PRODUCTS, SET_PRODUCT,SET_SELLER } from "../types";

const initialState = {
  products: [],
  currentProduct: {},
  seller:{}
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
      case SET_SELLER:
        return{
          ...state,
          seller: action.payload
        }
    default:
      return state;
  }
}
