import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
export default function Compare() {
    return (
      <>
        <div className="flex items-center text-sm">
          <FontAwesomeIcon
            icon={faExchangeAlt}
            className="text-gray-500 hover:text-green-500 cursor-pointer me-2"
            title="مقارنة"
          />
          <p>Compare</p>
        </div>
      </>
    );
}