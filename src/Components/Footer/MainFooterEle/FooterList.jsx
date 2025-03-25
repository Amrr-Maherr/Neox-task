import React from "react";

function FooterList({ title, items }) {
  return (
    <div className="col-span-1 text-start">
      {title && <p className="mb-5 font-bold">{title}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-3 text-gray-400 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
