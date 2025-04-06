import React from "react";

function OrDivider() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-4">
      <div className="flex-grow w-px bg-gray-300"></div>
      <div
        className="w-10 h-10 my-3 bg-white rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0"
      >
        <span className="text-xs font-semibold text-gray-500 uppercase">
          OR
        </span>
      </div>
      <div className="flex-grow w-px bg-gray-300"></div>
    </div>
  );
}

export default OrDivider;
