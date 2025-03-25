import React from "react";
import CopyrightText from "../Footer/LastFooterEle/CopyrightText";
import PaymentIcons from "../Footer/LastFooterEle/PaymentIcons";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported.

export default function LastFooter() {
  return (
    <>
      <div className=" bg-[#eaeaea] p-2">
        <div className=" flex justify-between items-center  mx-auto w-[85%]">
          <CopyrightText />
          <PaymentIcons />
        </div>
      </div>
    </>
  );
}
