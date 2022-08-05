import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Subscribe from "../../components/subcribe/Subcribe";
import Footer from "../../components/footer/Footer";
import "./SingleHotelPage.scss";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

const SingleHotelPage = () => {
  const location = useLocation();
  const hotelIDFromURL = location.pathname.split("/")[2];
  const [sliderNumber, setSliderNumber] = useState(0);
  const [show, setShow] = useState(false);

  const handleShow = (index) => {
    setSliderNumber(index);
    setShow(!show);
  };

  const handleSlide = (direction) => {
    let newSliderNumber;

    if (direction === "left") {
      newSliderNumber = sliderNumber === 0 ? 5 : sliderNumber - 1;
    } else {
      newSliderNumber = sliderNumber === 5 ? 0 : sliderNumber + 1;
    }

    setSliderNumber(newSliderNumber);
  };

  const { data, loading, error } = useFetch(`/hotels/${hotelIDFromURL}`);

  return (
    <div>
      <Navbar />
      <Header type="list" />

      {loading ? (
        "Loading data..."
      ) : (
        <div className="singleHotelPage_container">
          {show && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setShow(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleSlide("left")}
              />
              <div className="slider_wrapper">
                <img
                  src={data.photos[sliderNumber]}
                  alt=""
                  className="slider_img"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleSlide("right")}
              />
            </div>
          )}
          <div className="singleHotelPage_wrapper">
            <button className="book_now_btn">Book Now!</button>
            <h1 className="title">{data.name}</h1>
            <div className="singleHotelPage_address">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>

            <span className="singleHotelPage_distance">
              Perfect location - {data.distance}m{" "}
            </span>
            <div className="singleHotelPage_Highlight">
              Book this price {data.cheapestPrice} will save you tons of money.
            </div>

            <div className="singleHotelPage_images">
              {data.photos?.map((photo, index) => (
                <div className="singleHotelPage_images_wrapper">
                  <img
                    onClick={() => handleShow(index)}
                    src={photo}
                    alt=""
                    className="hotel_image"
                  />
                </div>
              ))}
            </div>

            <div className="singleHotelPage_details">
              <div className="singleHotelPage_texts">
                <h1 className="title">{data.hotelName}</h1>
                <p className="singleHotelPage_desc">{data.desc}</p>
              </div>

              <div className="singleHotelPage_detail_price">
                <h1>Perfect for you</h1>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, perspiciatis.
                </span>
                <h2>
                  <b>$900</b> /10 nights
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default SingleHotelPage;
