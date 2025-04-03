import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavSearchBar() {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "home") {
      navigate("/");
    } else {
      navigate("/Categories");
    }
  };

  return (
    <div className="col-span-2 relative w-full border border-yellow-500 rounded-full overflow-hidden flex items-center">
      <input
        type="search"
        className="w-full px-4 py-2 pr-24 text-gray-700 border-none outline-none rounded-full"
        placeholder="Search..."
      />
      <select
        onChange={handleCategoryChange}
        defaultValue="all"
        className="absolute right-20 top-1/2 -translate-y-1/2 bg-white border-none text-gray-700 px-2 py-1 outline-none rounded-md shadow-sm"
      >
        <option value="home">Home</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="all">category's</option>
      </select>
      <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white p-5 rounded-e-full hover:bg-yellow-600">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-md font-light text-black"
        />
      </button>
    </div>
  );
}

export default NavSearchBar;
