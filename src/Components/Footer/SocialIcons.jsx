import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="flex gap-4 mt-4">
      <a href="#" className="text-gray-500 hover:text-blue-600">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-blue-400">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-pink-600">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-blue-800">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-red-600">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-red-700">
        <FontAwesomeIcon icon={faPinterest} size="2x" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
    </div>
  );
}

export default SocialIcons;