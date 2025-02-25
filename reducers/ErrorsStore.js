import { GET_ERRORS, CLEAN_ERRORS } from "../types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      const arrayMessage = Object.values(action.payload);  
      return arrayMessage[0];
    case CLEAN_ERRORS:
      return {};
    default:
      return state;
  }
}
