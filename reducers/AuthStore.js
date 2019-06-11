import { SIGN_UP, SIGN_IN } from "../types";

const initialState = {
  user: {},
  registered: false,
  token: "",
  currentUser: {},
  currentState: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        registered: true,
        user: action.payload
      };
    case SIGN_IN:
      return {
        ...state,
        registered: true,
        token: action.payload
      };
    default:
      return state;
  }
}
