// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import "./FeatureHotel.scss";
// import { faStarSharp } from "@fortawesome/free-solid-svg-icons";

const FeatureHotel = () => {
  const countByTypeURL = "/hotels/countByCity?cities=Boston,Maine,Haverhill";
  const { data, loading } = useFetch(countByTypeURL);

  return (
    <div className="feature_hotel">
      <div className="feature_hotel_items">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1c/d2/51/82/exterior.jpg"
          alt=""
        />
        <span className="feature_hotel_name">Happy Inn</span>
        <span className="feature_hotel_city">Boston</span>
        <span className="feature_hotel_price">$200/night</span>

        <div className="feature_hotel_rating">
          <button>5</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="feature_hotel_items">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/21/5e/3c/e0/exterior-view.jpg"
          alt=""
        />
        <span className="feature_hotel_name">Happy Inn</span>
        <span className="feature_hotel_city">Boston</span>
        <span className="feature_hotel_price">$200/night</span>

        <div className="feature_hotel_rating">
          {/* <FontAwesomeIcon icon={faStarSharp} /> */}
          <button>5</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="feature_hotel_items">
        <img
          src="https://www.thehotelguru.com/_images/6e/9c/6e9c275a8216784cefd71df1a093f051/600x422.jpg"
          alt=""
        />
        <span className="feature_hotel_name">Happy Inn</span>
        <span className="feature_hotel_city">Boston</span>
        <span className="feature_hotel_price">$200/night</span>

        <div className="feature_hotel_rating">
          <button>5</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureHotel;
