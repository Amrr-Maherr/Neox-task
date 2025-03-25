import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";

function PaymentIcons() {
  return (
    <div className="flex mt-4 sm:mt-0 gap-4">
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <FontAwesomeIcon
          icon={faCcVisa}
          size="2x"
          style={{ color: "#1a1f71" }}
        />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <FontAwesomeIcon
          icon={faCcMastercard}
          size="2x"
          style={{ color: "#ff6c00" }}
        />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <FontAwesomeIcon
          icon={faCcAmex}
          size="2x"
          style={{ color: "#29abe2" }}
        />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <FontAwesomeIcon
          icon={faCcPaypal}
          size="2x"
          style={{ color: "#00457c" }}
        />
      </a>
    </div>
  );
}

export default PaymentIcons;
