import "./SearchResult.scss";

const SearchResult = () => {
  return (
    <div className="search_result">
      <img
        className="search_result_img"
        src="https://lh3.googleusercontent.com/proxy/rpCOCUeL5DTvc3qiQw93r5qFPhBgPzrrFfl-UZHTKJWxde5ZFqS1g5WkJcaPaeU5WQ7tqySl88q2teTB1yABDmSRA-MIxUWdgyrF3qWX6JDk6I6a8F0-q1t-6j3stlxKXtodNwluRtuBnHrjJe1lyEw8CYkzFw=w296-h202-n-k-rw-no-v1"
        alt=""
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
