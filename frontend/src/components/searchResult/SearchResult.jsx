import "./SearchResult.scss";

const SearchResult = () => {
  return (
    <div className="search_result">
      <img
        className="search_result_img"
        src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="hotel"
      />

      <div className="search_result_desc">
        <h1 className="search_result_title">Tower Street Apartments</h1>
        <span className="search_result_distance">500m from center</span>
        <span className="search_result_taxi_options">Free airport taxi</span>
        <span className="search_result_subtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="search_result_features">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="search_result_cancel_options">Free cancellation </span>
        <span className="search_result_cancel_options_subtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="search_result_details">
        <div className="search_result_ratings">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="search_result_detail_text">
          <span className="search_result_price">$112</span>
          <span className="search_result_tax_options">
            Includes taxes and fees
          </span>
          <button className="search_result_check_out_button">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
