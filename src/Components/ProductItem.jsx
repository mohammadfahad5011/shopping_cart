import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../Redux/Cart/cartAction";
import { changeProductQtyDecrement } from "../Redux/Product/productAction";

const ProductItem = () => {
  const productInfo = useSelector((state) => state.addProduct);
  const dispatch = useDispatch();

  const addCartHandler = (product, id) => {
    dispatch(addToCartAction(product));
    dispatch(changeProductQtyDecrement(id));
  };

  return (
    <>
      {productInfo.map((product) => {
        const { id, imageURL, title, catagory, price, quantity } = product;
        return (
          <div className="lws-productCard" key={id}>
            <img className="lws-productImage" src={imageURL} alt="product" />
            <div className="p-4 space-y-2">
              <h4 className="lws-productName">{title}</h4>
              <p className="lws-productCategory">{catagory}</p>
              <div className="flex items-center justify-between pb-2">
                <p className="productPrice">
                  BDT <span className="lws-price">{price}</span>
                </p>
                <p className="productQuantity">
                  QTY <span className="lws-quantity">{quantity}</span>
                </p>
              </div>
              <button
                className="lws-btnAddToCart"
                onClick={() => addCartHandler(product, id)}
                disabled={quantity <= 0}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;
