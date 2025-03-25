import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import Wishlist from "./Wishlist";
import Compare from "./Compare";

function CardActions() {
  return (
    <div className="flex justify-around items-center flex-wrap p-2 border-t">
      <Wishlist />
      <Compare/>
    </div>
  );
}

export default CardActions;
