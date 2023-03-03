// import { ADD_TO_CART, REMOVE_TO_CART } from "./cartConstant";

// const initialState = [];

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const existItem = state.find((ei) => ei.id === action.payload.id);
//       if (existItem) {
//         console.log(existItem)
//         return[...state,existItem.quantity+1]

//       }
//       const newItem = action.payload;
//       return [...state, newItem];

//     case REMOVE_TO_CART:
//       //   return state.filter((item) => item.id !== action.payload)
//       return [...state.filter((item) => item.id !== action.payload)];

//     default:
//       return state;
//   }
// };

import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "./cartConstant";

const initialState = [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case
    case ADD_TO_CART:
      const existItem = state.find((ei) => ei.id === action.payload.id);
      if (existItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const newItem = action.payload;
      return [...state, { ...newItem, quantity: 1 }];
    // return [...state,newItem];

    // case
    case INCREMENT_ITEM:
      const existingItemInc = state.find((ei) => ei.id === action.payload);

      const updatedItemInc = {
        ...existingItemInc,
        quantity: existingItemInc.quantity + 1,
        // price: existingItemInc.price * (existingItemInc.quantity + 1),
      };
      const updatedStateInc = state.map((item) =>
        item.id === action.payload ? updatedItemInc : item
      );
      return updatedStateInc;
    // case
    case DECREMENT_ITEM:
      const existingItem = state.find((ei) => ei.id === action.payload);
      console.log(existingItem);
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      const updatedState = state.map((item) =>
        item.id === action.payload ? updatedItem : item
      );
      return updatedState;

    // case
    case REMOVE_TO_CART:
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};
