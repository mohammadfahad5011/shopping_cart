import { ADD_TO_CART,REMOVE_TO_CART , INCREMENT_ITEM, DECREMENT_ITEM} from "./cartConstant"

export const addToCartAction = (product) =>{
    return{
        type: ADD_TO_CART,
        payload : product
    }
}

export const incrementItemAction = (id) =>{
    return{
        type: INCREMENT_ITEM,
        payload: id,
    }
}

export const decrementItemAction = (id) =>{
    return{
        type: DECREMENT_ITEM,
        payload: id,
    }
}


export const removeToCartAction = (id) =>{
    return{
        type: REMOVE_TO_CART,
        payload : id
    }
}
