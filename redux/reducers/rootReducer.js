import { combineReducers } from "redux";
import prod from './productsReducer'
import cart from './cartReducer'
import error from './errorReducer'
import cate from './categoryReducer'


export default combineReducers({
  cart,
  prod,
  error,
  cate
});
