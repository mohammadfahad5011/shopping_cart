import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeToCartAction,
  incrementItemAction,
  decrementItemAction,
} from "../Redux/Cart/cartAction";
import {
  changeProductQtyDecrement,
  changeProductQtyIncrement,
} from "../Redux/Product/productAction";

const CartProduct = () => {
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.addProduct);
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeToCartAction(id));
  };

  // const handleIncrement = (id) => {
  //   dispatch(changeProductQtyDecrement(id));
  //   dispatch(incrementItemAction(id));
  // };

  const handleIncrement = (id) => {
    const products = product.find((item) => item.id === id);
    if (products.quantity > 0) {
      dispatch(changeProductQtyDecrement(id));
      dispatch(incrementItemAction(id));
    }
  };

  const handleDecrement = (id) => {
    const cartItems = cart.find((item) => item.id === id);
    if (cartItems.quantity > 0) {
      dispatch(changeProductQtyIncrement(id));
      dispatch(decrementItemAction(id));
    }
  };

  return (
    <>
      {cart.map((item) => {
        const { id, productName, price, catagory, imageURL, quantity } = item;
        return (
          <>
            {/* <!-- Cart Item --> */}
            <div className="cartCard" key={id}>
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img
                  className="lws-cartImage"
                  src={imageURL}
                  alt={productName}
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">{productName}</h4>
                  <p className="lws-cartCategory">{catagory}</p>
                  <p>
                    BDT <span className="lws-cartPrice">{price}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                  <button className="lws-incrementQuantity">
                    <i
                      className="text-lg fa-solid fa-plus"
                      onClick={() => handleIncrement(id)}
                    ></i>
                  </button>
                  <span className="lws-cartQuantity">{quantity}</span>
                  <button className="lws-decrementQuantity">
                    <i
                      className="text-lg fa-solid fa-minus"
                      onClick={() => handleDecrement(id)}
                    ></i>
                  </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">
                  BDT{" "}
                  <span className="lws-calculatedPrice">
                    {price * quantity}
                  </span>
                </p>
              </div>
              {/* <!-- delete button --> */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                  className="lws-removeFromCart"
                  onClick={() => removeHandler(id, item)}
                >
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
            {/* <!-- Cart Items Ends --> */}
          </>
        );
      })}
    </>
  );
};

export default CartProduct;
