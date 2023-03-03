import { ADD_PRODUCT, QTY_CHANGE_INCREMENT,QTY_CHANGE_DECREMENT } from "./productConstant";

export const AddProductAction = (productInfo) => {
  return {
    type: ADD_PRODUCT,
    payload: productInfo,
  };
};

export const changeProductQtyDecrement = (id) => {
  return {
    type: QTY_CHANGE_DECREMENT,
    payload: id,
  };
};

export const changeProductQtyIncrement = (id) => {
  return {
    type: QTY_CHANGE_INCREMENT,
    payload: id,
  };
};
