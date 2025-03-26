import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItemWithToast } from "../../../../Redux/products/cartSlice"; // Import the async action

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemWithToast(product)); // Dispatch the async action
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className={`text-yellow-400 hover:text-yellow-500 text-md cursor-pointer bg-gray-200 hover:bg-white p-2 rounded-full transition-colors duration-200`}
        onClick={handleAddToCart}
      />
    </>
  );
}

export default AddToCartButton;
