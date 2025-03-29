import React from "react";

function QuantityInput({ quantity, setQuantity }) {
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="flex items-center p-2">
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-20 py-2 px-4 rounded-full text-center border  focus:ring-blue-500 focus:border-blue-500"
        min="1"
      />
    </div>
  );
}

export default QuantityInput;
