import React from "react";
import NewsletterSignup from "../Footer/FirstFooterEle/NewsletterSignup";
import SignupCoupon from "../Footer/FirstFooterEle/SignupCoupon";
import EmailSignupForm from "../Footer/FirstFooterEle/EmailSignupForm";

export default function FirstFooter() {
  return (
    <>
      <div className="py-1 bg-yellow-400 ">
        <div className="w-[85%] mx-auto flex items-center justify-between flex-wrap">
          <NewsletterSignup />
          <SignupCoupon />
          <EmailSignupForm />
        </div>
      </div>
    </>
  );
}
