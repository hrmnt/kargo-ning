import { combineReducers } from "redux";
import auth from "./AuthStore";
import errors from "./ErrorsStore";
import products from "./ProductStore";
import profile from "./UserStore";
import translate from "./TranslateStore";


export default combineReducers({
    auth,
    errors,
    products,
    profile,
    translate
  });