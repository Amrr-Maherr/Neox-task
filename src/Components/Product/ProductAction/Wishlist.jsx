import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
export default function Wishlist() {
    return (
      <>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon
            icon={faHeart}
            className="text-gray-500 hover:text-red-500 cursor-pointer me-2"
            title="إضافة إلى المفضلة"
          />
          <p> Wishlist</p>
        </div>
      </>
    );
}