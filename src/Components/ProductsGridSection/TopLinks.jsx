// TopLinks.jsx
import React from "react";

const TopLinks = ({ links }) => {
  return (
    <div className="flex justify-center items-center gap-10 flex-wrap">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-700 hover:text-blue-500 font-medium hover:border-b-2 hover:border-yellow-500 py-3"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default TopLinks;
