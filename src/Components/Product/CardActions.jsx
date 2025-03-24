import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

function CardActions() {
  return (
    <div className="flex justify-around items-center flex-wrap p-2 border-t">
      <div className="flex items-center text-sm">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-gray-500 hover:text-red-500 cursor-pointer me-2"
          title="إضافة إلى المفضلة"
        />
        <p> Wishlist</p>
      </div>
      <div className="flex items-center text-sm">
        <FontAwesomeIcon
          icon={faExchangeAlt}
          className="text-gray-500 hover:text-green-500 cursor-pointer me-2"
          title="مقارنة"
        />
        <p>Compare</p>
      </div>
    </div>
  );
}

export default CardActions;
