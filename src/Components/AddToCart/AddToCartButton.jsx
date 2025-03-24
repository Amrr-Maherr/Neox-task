// AddToCartButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/products/cartSlice";
import toast from "react-hot-toast";

function AddToCartButton({ product, iconColor = "text-blue-500" }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...product }));
    toast.success(`${product.title.slice(0, 15)}... added to cart!`, {
      duration: 2000,
      position: "bottom-right",
    });
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faShoppingCart}
        className={`${iconColor} hover:text-yellow-500 text-md cursor-pointer bg-gray-500 hover:bg-white p-2 rounded-full transition-colors duration-200`}
        onClick={handleAddToCart}
      />
    </>
  );
}

export default AddToCartButton;
