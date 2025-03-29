import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function AddToCartButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-yellow-500 hover:bg-black hover:text-white text-white font-bold py-2 px-4 rounded-full flex items-center"
    >
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
