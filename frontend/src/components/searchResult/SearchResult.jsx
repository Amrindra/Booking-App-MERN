import { Link } from "react-router-dom";
import "./SearchResult.scss";

const SearchResult = ({ item }) => {
  return (
    <div className="search_result">
      <img className="search_result_img" src={item.photos[0]} alt="hotel" />

      <div className="search_result_desc">
        <h1 className="search_result_title">{item.hotelName}</h1>
        <span className="search_result_distance">{item.distance} miles</span>
        <span className="search_result_taxi_options">Free airport taxi</span>
        <span className="search_result_subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="search_result_features">{item.desc}</span>
        <span className="search_result_cancel_options">Free cancellation </span>
        <span className="search_result_cancel_options_subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="search_result_details">
        {item.rating && (
          <div className="search_result_ratings">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="search_result_detail_text">
          <span className="search_result_price">${item.cheapestPrice}</span>
          <span className="search_result_tax_options">
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item._id}`}>
            <button className="search_result_check_out_button">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
