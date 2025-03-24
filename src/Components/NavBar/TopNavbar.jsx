import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faShoppingCart,
  faUser,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

export default function SubNav() {
  const NavData = [
    {
      title: "Store Locator",
      icon: faMapMarkerAlt,
      href: "#",
    },
    {
      title: "Track Your Order",
      icon: faTruck,
      href: "#",
    },
    {
      title: "Shop",
      icon: faShoppingCart,
      href: "#",
    },
    {
      title: "My Account",
      icon: faUser,
      href: "#",
    },
  ];

  return (
    <>
      <section className="hidden xl:block">
        <div className="flex items-center justify-between p-3 text-sm text-[#646D74] w-[85%] mx-auto">
          <div>
            <p>Welcome to Worldwide Electronics Store</p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-5">
              {NavData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 border-e-2 pe-3"
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </section>
    </>
  );
}
