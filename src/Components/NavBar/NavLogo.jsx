import React from "react";

function NavLogo({ LogoText, fontSize, fontWight }) {
  return (
    <div className="col-span-1">
      <h1 className={`${fontSize} ${fontWight} text-black`}>
        {LogoText}
        <span className="text-yellow-500">.</span>
      </h1>
    </div>
  );
}

export default NavLogo;
