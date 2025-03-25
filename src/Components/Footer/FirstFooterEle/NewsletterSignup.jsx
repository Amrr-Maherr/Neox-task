import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // استيراد أيقونة الرسالة

function NewsletterSignup() {
  return (
    <div className="flex items-center justify-center gap-5 my-2">
      <p>
        <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
        {/* استخدام المكون FontAwesomeIcon */}
      </p>
      <p className="text-2xl">Sign up to Newsletter</p>
    </div>
  );
}

export default NewsletterSignup;
