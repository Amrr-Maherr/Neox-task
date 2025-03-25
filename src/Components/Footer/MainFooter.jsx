import React from "react";
import LogoAndContact from "./MainFooterEle/LogoAndContact";
import FooterList from "./MainFooterEle/FooterList";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported.

export default function MainFooter() {
  const listItems1 = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Waterproof Headphones",
  ];

  const listItems2 = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Waterproof Headphones",
  ];

  const listItems3 = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Waterproof Headphones",
  ];

  return (
    <>
      <footer className="bg-white text-black">
        <div className="mx-auto w-[85%]  p-4 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <LogoAndContact />
            <FooterList title="Find It Fast" items={listItems1} />
            <FooterList items={listItems2} />
            <FooterList title="Find It Fast" items={listItems3} />
          </div>
        </div>
      </footer>
    </>
  );
}
