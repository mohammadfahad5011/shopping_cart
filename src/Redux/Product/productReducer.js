import { ADD_PRODUCT, QTY_CHANGE_DECREMENT,QTY_CHANGE_INCREMENT } from "./productConstant";

const initialState = [];

export const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const newProduct = action.payload;
      return [...state, newProduct];

    case QTY_CHANGE_DECREMENT:
      // let id = action.payload;
      return state.map((product) =>
        product.id === action.payload ? { ...product, quantity:product.quantity - 1 } : product
      );
      case QTY_CHANGE_INCREMENT:
        //  id = action.payload;
        return state.map((product) =>
          product.id === action.payload ? { ...product, quantity:product.quantity + 1 } : product
        );
    default:
      return state;
  }
};
