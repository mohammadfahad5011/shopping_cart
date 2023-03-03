import React from "react";
import { useSelector } from "react-redux";
import CreateProduct from "./CreateProduct";
import ProductItem from "./ProductItem";

const ProductScreen = () => {

  const productInfo = useSelector((state)=> state.addProduct)

  return (
    <>
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {productInfo.length === 0 ?"No item added": <ProductItem />}
        </div>
        <div>
          <CreateProduct/>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
