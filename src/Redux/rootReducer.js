import { addProductReducer } from "./Product/productReducer";
import {combineReducers} from 'redux'
import { cartReducer } from "./Cart/cartReducer";


export const RootReducer = combineReducers({
   addProduct: addProductReducer,
   cart : cartReducer,
});