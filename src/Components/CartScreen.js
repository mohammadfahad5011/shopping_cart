import React from "react";
import BillDetails from "./BillDetails";
import CartProduct from "./CartProduct";
// import Navbar from "./Navbar";

const CartScreen = () => {
  return (
    <>
      {/* <Navbar /> */}
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              <CartProduct />
            </div>
            {/* <!-- Bill Details --> */}
            <BillDetails />
          </div>
        </div>
    </>
  );
};

export default CartScreen;
