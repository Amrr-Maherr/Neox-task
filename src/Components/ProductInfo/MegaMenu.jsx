import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

// --- Data Arrays for Links ---

const homeQuickLinks = [
  { text: "About Us", href: "#" },
  { text: "Services", href: "#" },
  { text: "Contact Us", href: "#" },
  { text: "Customer Support", href: "#" },
  { text: "Store Locator", href: "#" },
];

const homeFeaturedLinks = [
  { text: "New Arrivals", href: "#" },
  { text: "Best Sellers", href: "#" },
  { text: "Special Offers", href: "#" },
  { text: "Clearance", href: "#" },
];

const tvLinks = [
  { text: "Smart TV", href: "#" },
  { text: "OLED & QLED TV", href: "#" },
  { text: "4K Ultra HD TVs", href: "#" },
  { text: "8K TVs", href: "#" },
  { text: "LED TVs", href: "#" },
  { text: "Outdoor TVs", href: "#" },
  { text: "TV Accessories", href: "#" },
];

const audioLinks = [
  { text: "Soundbars", href: "#" },
  { text: "Home Theater Systems", href: "#" },
  { text: "Wireless Speakers", href: "#" },
  { text: "Headphones", href: "#" },
  { text: "Receivers & Amplifiers", href: "#" },
  { text: "Turntables", href: "#" },
];

const tvBrandLinks = [
  { text: "Samsung", href: "#" },
  { text: "LG", href: "#" },
  { text: "Sony", href: "#" },
  { text: "Bose", href: "#" },
  { text: "Sonos", href: "#" },
  { text: "JBL", href: "#" },
];

const tvDealsLinks = [
  { text: "TV Buying Guide", href: "#" },
  { text: "Home Audio Guide", href: "#" },
  { text: "Current TV Deals", href: "#", isEmphasized: true },
  { text: "Audio Sales", href: "#", isEmphasized: true },
];

const androidLinks = [
  { text: "Samsung Galaxy", href: "#" },
  { text: "Google Pixel", href: "#" },
  { text: "Xiaomi", href: "#" },
  { text: "OnePlus", href: "#" },
  { text: "Motorola", href: "#" },
  { text: "Unlocked Phones", href: "#" },
];

const iosLinks = [
  { text: "iPhone 15 Pro", href: "#" },
  { text: "iPhone 15", href: "#" },
  { text: "iPhone 14", href: "#" },
  { text: "iPhone SE", href: "#" },
  { text: "Compare iPhones", href: "#" },
];

const phoneAccessoryLinks = [
  { text: "Cases & Protection", href: "#" },
  { text: "Screen Protectors", href: "#" },
  { text: "Chargers & Cables", href: "#" },
  { text: "Power Banks", href: "#" },
  { text: "Car Mounts", href: "#" },
  { text: "Headsets", href: "#" },
];

const phonePlanLinks = [
  { text: "Carrier Plans", href: "#" },
  { text: "Prepaid Phones", href: "#" },
  { text: "Trade-In Program", href: "#", isEmphasized: true },
  { text: "Current Phone Deals", href: "#", isEmphasized: true },
];

const laptopLinks = [
  { text: "Gaming Laptops", href: "#" },
  { text: "MacBooks", href: "#" },
  { text: "Windows Laptops", href: "#" },
  { text: "2-in-1 Laptops", href: "#" },
  { text: "Chromebooks", href: "#" },
  { text: "Business Laptops", href: "#" },
];

const desktopLinks = [
  { text: "Gaming Desktops", href: "#" },
  { text: "iMac", href: "#" },
  { text: "All-in-One PCs", href: "#" },
  { text: "Tower PCs", href: "#" },
  { text: "Mini PCs", href: "#" },
];

const computerAccessoryLinks = [
  { text: "Monitors", href: "#" },
  { text: "Keyboards", href: "#" },
  { text: "Mice", href: "#" },
  { text: "Printers & Scanners", href: "#" },
  { text: "Webcams", href: "#" },
  { text: "Storage & Hard Drives", href: "#" },
  { text: "Networking", href: "#" },
];

const computerBrandLinks = [
  { text: "Apple", href: "#" },
  { text: "HP", href: "#" },
  { text: "Dell", href: "#" },
  { text: "Lenovo", href: "#" },
  { text: "Microsoft Surface", href: "#" },
  { text: "Laptop Deals", href: "#", isEmphasized: true },
  { text: "Desktop Deals", href: "#", isEmphasized: true },
];

const wearableLinks = [
  { text: "Smartwatches", href: "#" },
  { text: "Apple Watch", href: "#" },
  { text: "Fitness Trackers", href: "#" },
  { text: "VR Headsets", href: "#" },
  { text: "Smart Glasses", href: "#" },
];

const smartHomeLinks = [
  { text: "Smart Speakers & Displays", href: "#" },
  { text: "Smart Lighting", href: "#" },
  { text: "Smart Thermostats", href: "#" },
  { text: "Home Security Cameras", href: "#" },
  { text: "Smart Plugs & Outlets", href: "#" },
];

const otherGadgetLinks = [
  { text: "Drones", href: "#" },
  { text: "Action Cameras", href: "#" },
  { text: "E-readers", href: "#" },
  { text: "Portable Projectors", href: "#" },
  { text: "Gadget Deals", href: "#", isEmphasized: true },
];

const gpsNavLinks = [
  { text: "Car GPS", href: "#" },
  { text: "Motorcycle GPS", href: "#" },
  { text: "Handheld GPS", href: "#" },
  { text: "GPS Watches", href: "#" },
  { text: "GPS Accessories", href: "#" },
];

const carElectronicsLinks = [
  { text: "Car Stereos", href: "#" },
  { text: "Car Speakers & Subwoofers", href: "#" },
  { text: "Car Amplifiers", href: "#" },
  { text: "Dash Cams", href: "#" },
  { text: "Radar Detectors", href: "#" },
  { text: "Backup Cameras", href: "#" },
];

const carInstallBrandLinks = [
  { text: "Car Installation Services", href: "#" },
  { text: "Garmin", href: "#" },
  { text: "Kenwood", href: "#" },
  { text: "Pioneer", href: "#" },
  { text: "Alpine", href: "#" },
  { text: "Car Audio Deals", href: "#", isEmphasized: true },
];

const cameraLinks = [
  { text: "DSLR Cameras", href: "#" },
  { text: "Mirrorless Cameras", href: "#" },
  { text: "Point & Shoot Cameras", href: "#" },
  { text: "Action Cameras", href: "#" },
  { text: "Camcorders", href: "#" },
  { text: "Instant Cameras", href: "#" },
  { text: "Used Cameras", href: "#" },
];

const lensLinks = [
  { text: "DSLR Lenses", href: "#" },
  { text: "Mirrorless Lenses", href: "#" },
  { text: "Telephoto Lenses", href: "#" },
  { text: "Wide-Angle Lenses", href: "#" },
  { text: "Macro Lenses", href: "#" },
  { text: "Lens Filters & Accessories", href: "#" },
];

const cameraAccessoryLinks = [
  { text: "Tripods & Supports", href: "#" },
  { text: "Camera Bags & Cases", href: "#" },
  { text: "Memory Cards", href: "#" },
  { text: "Flashes & Lighting", href: "#" },
  { text: "Batteries & Chargers", href: "#" },
  { text: "Microphones", href: "#" },
];

const cameraBrandLinks = [
  { text: "Canon", href: "#" },
  { text: "Nikon", href: "#" },
  { text: "Sony", href: "#" },
  { text: "GoPro", href: "#" },
  { text: "Fujifilm", href: "#" },
  { text: "Camera Deals", href: "#", isEmphasized: true },
  { text: "Lens Deals", href: "#", isEmphasized: true },
];

// --- Helper Function for Rendering Links ---

const renderLinks = (links) => (
  <ul className="list-none space-y-2">
    {links.map((link, index) => (
      <li key={index}>
        <a
          href={link.href}
          className={`${
            link.isEmphasized
              ? "text-blue-600 font-semibold hover:underline"
              : "text-gray-600 hover:text-blue-600"
          } text-sm block`} // Added block for better click area
        >
          {link.text}
        </a>
      </li>
    ))}
  </ul>
);

// --- ActiveMenu Component ---

const ActiveMenu = ({ content }) => {
  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50">
      <div className="container w-[85%] mx-auto py-6 px-4">{content}</div>
    </div>
  );
};

// --- MegaMenu Component ---

const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const MenuLinks = [
    {
      title: "Home",
      content: (
        <div className="mega-menu-content grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Quick Links
            </h3>
            {renderLinks(homeQuickLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Featured
            </h3>
            {renderLinks(homeFeaturedLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Don't Miss
            </h3>
            <div className="bg-gray-100 p-4 rounded text-center h-32 flex items-center justify-center mb-2">
              <p className="text-gray-700 font-medium">
                Placeholder for Promotion
              </p>
            </div>
            <a
              href="#"
              className="block text-center text-blue-600 hover:underline text-sm"
            >
              Shop Now
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "TV & Audio",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Televisions
            </h3>
            {renderLinks(tvLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Audio
            </h3>
            {renderLinks(audioLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Shop by Brand
            </h3>
            {renderLinks(tvBrandLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Deals & Guides
            </h3>
            {renderLinks(tvDealsLinks)}
            <div className="bg-blue-50 p-3 rounded text-center mt-4">
              <p className="text-blue-800 font-medium text-sm">
                Save up to 20% on Select Soundbars!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Smart Phones",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Android Phones
            </h3>
            {renderLinks(androidLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              iPhone
            </h3>
            {renderLinks(iosLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Accessories
            </h3>
            {renderLinks(phoneAccessoryLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Plans & Deals
            </h3>
            {renderLinks(phonePlanLinks)}
            <div className="bg-green-50 p-3 rounded text-center mt-4">
              <p className="text-green-800 font-medium text-sm">
                Get a $200 Gift Card with select phones!
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Laptops & Desktops",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Laptops
            </h3>
            {renderLinks(laptopLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Desktops
            </h3>
            {renderLinks(desktopLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Computer Accessories
            </h3>
            {renderLinks(computerAccessoryLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Brands & Deals
            </h3>
            {renderLinks(computerBrandLinks)}
          </div>
        </div>
      ),
    },
    {
      title: "Gadgets",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Wearable Tech
            </h3>
            {renderLinks(wearableLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Smart Home
            </h3>
            {renderLinks(smartHomeLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Other Gadgets
            </h3>
            {renderLinks(otherGadgetLinks)}
          </div>
        </div>
      ),
    },
    {
      title: "GPS & Car",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              GPS Navigation
            </h3>
            {renderLinks(gpsNavLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Car Electronics
            </h3>
            {renderLinks(carElectronicsLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Installation & Brands
            </h3>
            {renderLinks(carInstallBrandLinks)}
          </div>
        </div>
      ),
    },
    {
      title: "Cameras & Accessories",
      content: (
        <div className="mega-menu-content grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Cameras
            </h3>
            {renderLinks(cameraLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Lenses
            </h3>
            {renderLinks(lensLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Accessories
            </h3>
            {renderLinks(cameraAccessoryLinks)}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">
              Brands & Deals
            </h3>
            {renderLinks(cameraBrandLinks)}
            <div className="bg-red-50 p-3 rounded text-center mt-4">
              <p className="text-red-800 font-medium text-sm">
                Free Memory Card with select cameras!
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const currentContent =
    activeMenu !== null ? MenuLinks[activeMenu].content : null;

  return (
    <nav
      className="bg-yellow-400 w-full relative"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container w-[85%] mx-auto flex items-center justify-between flex-wrap p-4">
        {MenuLinks.map((link, index) => (
          <div key={index} onMouseEnter={() => handleMouseEnter(index)}>
            <p className="text-black font-semibold hover:text-gray-700 cursor-pointer flex items-center p-4">
              {link.title}
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-gray-600 ml-1"
              />
            </p>
          </div>
        ))}
      </div>

      {activeMenu !== null && <ActiveMenu content={currentContent} />}
    </nav>
  );
};

export default MegaMenu;
