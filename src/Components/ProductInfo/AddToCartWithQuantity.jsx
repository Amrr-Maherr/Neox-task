import React, { useState } from "react";
import QuantityInput from "../ProductInfo/QuantityInput";
import AddToCartButton from "../ProductInfo/AddToCartButton";
import CompareButton from "./CompareButton";
import { useDispatch } from "react-redux";
import { addItemWithToast } from "../../Redux/products/cartSlice";

function AddToCartWithQuantity({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addItemWithToast(productWithQuantity));
  };

  return (
    <div>
      <div className="flex items-center justify-start">
        <QuantityInput quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onClick={handleAddToCart} />
      </div>
      <div className="my-5">
        <CompareButton />
      </div>
    </div>
  );
}

export default AddToCartWithQuantity;
