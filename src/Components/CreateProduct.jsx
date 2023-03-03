import React, { useState} from "react";
import {useDispatch} from 'react-redux' ;
import { v4 as uuidv4 } from 'uuid';
import { AddProductAction } from "../Redux/Product/productAction";

const CreateProduct = () => {
    const dispatch = useDispatch();
    const [productName , setProductName] = useState("");
    const [catagory, setCatagory] = useState('');
    const [ imageURL, SetImageURL] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(productName, price, catagory, imageURL, quantity, uuidv4());

        dispatch(AddProductAction({
          id: uuidv4(),
          productName, price, catagory, imageURL, quantity
        }))
    }


  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
          {/* <!-- product name --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
              onChange={(e)=> setProductName(e.target.value)}
            />
          </div>
          {/* <!-- product category --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
              onChange={(e)=> setCatagory(e.target.value)}
            />
          </div>
          {/* <!-- product image url --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
              onChange={(e)=> SetImageURL(e.target.value)}
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
                onChange={(e)=> setPrice(e.target.value)}
              />
            </div>
            {/* <!-- quantity --> */}
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
                onChange={(e)=> setQuantity(e.target.value)}
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
