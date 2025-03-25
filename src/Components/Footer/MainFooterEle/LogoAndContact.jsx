import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import SocialIcons from "../SocialIcons"; // استيراد الكومبونانت SocialIcons

function LogoAndContact() {
  return (
    <div className="col-span-2 text-start flex flex-col justify-between">
      <p className="text-[#333E48] text-5xl font-bold">
        electro<span className="text-[#FDD700]">.</span>
      </p>
      <div className="flex my-5">
        <p>
          <FontAwesomeIcon
            icon={faHeadset}
            size="3x"
            className="mr-3 text-5xl text-yellow-400"
          />
        </p>
        <div>
          <p className="text-gray-300 text-sm">Got Questions ? Call us 24/7!</p>
          <p className="text-2xl">(800) 8001-8588, (0600) 874 548</p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm font-bold">Contact Info</p>
        <p className="text-gray-300 text-sm">
          17 Princess Road, London, Greater London NW1 8JR, UK
        </p>
      </div>
      <SocialIcons /> {/* استخدام الكومبونانت SocialIcons */}
    </div>
  );
}

export default LogoAndContact;
