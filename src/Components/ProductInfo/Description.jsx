import Hero from "../../Assets/overview_hero_title_2x.webp"
import HerTwo from "../../Assets/overview_hero_2x-e1459776153284-2048x860.webp";
import HerThree from "../../Assets/hero_large_2x.webp";
export default function Description() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <img src={Hero} alt="Product Overview" className="rounded-lg mb-4" />
      <p className="text-gray-700 leading-relaxed mb-4">
        A groundbreaking Retina display. Powerful dual-core and quad-core Intel
        processors. Fast flash storage. High-performance graphics. Great
        built-in apps. And now in the 13-inch model, a revolutionary new Force
        Touch trackpad and even longer battery life.1 Whatever you can imagine,
        MacBook Pro with Retina display gives you the power to create.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        The design of MacBook Pro packs a lot of power into not a lot of space.
        Because we believe that high performance shouldn’t come at the expense
        of portability. And despite being so compact, the new 13-inch and
        15-inch MacBook Pro with Retina display models now deliver up to 10
        hours and nine hours of battery life, respectively — an hour more than
        the previous models.
      </p>

      <img
        src={HerTwo} // Replace with the actual URL of your image
        alt="Multi-Touch Gestures"
        className="rounded-lg mb-4"
      />

      <p className="text-gray-700 leading-relaxed mb-4">
        With Multi-Touch in OS X, you can use realistic gestures like swiping or
        pinching to switch between apps, navigate your content and get the most
        out of your desktop space.
      </p>
      <img
        src={HerThree} // Replace with the actual URL of your image
        alt="Multi-Touch Gestures"
        className="rounded-lg mb-4"
      />
      <p className="text-gray-700 leading-relaxed mb-4">
        The new Force Touch trackpad takes all the capabilities of Multi-Touch
        and adds force sensors that detect subtle differences in the amount of
        downward pressure you apply. This lets you have a deeper connection to
        your content, bringing more functionality to your fingertip. It also
        introduces haptic feedback to MacBook Pro — allowing you to not just see
        what’s happening on the screen, but to feel it.
      </p>

      <div className="text-gray-500 text-sm">
        <nav aria-label="breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Smart Phones & Tablets
              </a>
              <svg
                className="fill-current w-3 h-3 mx-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="flex items-center">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Smartphones
              </a>
            </li>
            <li className="flex items-center">SKU: 5487FB8/19</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}
