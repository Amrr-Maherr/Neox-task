import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function CategoriesDrawer() {
  return (
    <button
      type="button"
      data-drawer-target="drawer-navigation"
      data-drawer-show="drawer-navigation"
      aria-controls="drawer-navigation"
      className="text-2xl p-2 rounded-lg hover:bg-gray-200 transition"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
}

export default CategoriesDrawer;
