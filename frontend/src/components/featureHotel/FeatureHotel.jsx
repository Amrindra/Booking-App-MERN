// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch";
import "./FeatureHotel.scss";
// import { faStarSharp } from "@fortawesome/free-solid-svg-icons";

const FeatureHotel = () => {
  const { data, loading } = useFetch(
    "/hotels?featured=true&limit=5&min=10&max=200"
  );

  return (
    <div className="feature_hotel">
      {loading ? (
        "Loading data..."
      ) : (
        <>
          {data.map((item) => (
            <div className="feature_hotel_items" key={item._id}>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/1c/d2/51/82/exterior.jpg"
                alt=""
              />
              <span className="feature_hotel_name">{item.hotelName}</span>
              <span className="feature_hotel_city">{item.city}</span>
              <span className="feature_hotel_price">
                ${item.cheapestPrice}/night
              </span>

              {/* If there is rating it will here accordingly */}
              {item.rating && (
                <div className="feature_hotel_rating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeatureHotel;
