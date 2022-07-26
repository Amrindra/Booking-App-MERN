import "./HotelList.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchResult from "../../components/searchResult/SearchResult";

const HotelList = () => {
  //This location will contain the informations from the Header component where we search, select date and option from Header component
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [options, setOptions] = useState(location.state?.options);
  const [showDatePicker, setShowDatePicker] = useState(false);
  console.log(location);

  return (
    <>
      <Navbar />
      <Header type="list" />

      {/* Hotel list search section */}
      <section className="hotel_list_container">
        <div className="hotel_list_warpper">
          <div className="hotel_list_search">
            <h1 className="hotel_list_title">Search</h1>
            <div className="hotel_list_items">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="hotel_list_items">
              <label>Cehck-in Date</label>
              <span
                className="date_picker_span"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>

              {showDatePicker && (
                <DateRange
                  onChange={(item) => setDate([item.section])}
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="hotel_list_items">
              <label>Options</label>
              <div className="list_option_wrapper">
                <div className="list_option_Item">
                  <span className="list_option_text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list_option_input" />
                </div>

                <div className="list_option_Item">
                  <span className="list_option_text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list_option_input" />
                </div>

                <div className="list_option_Item">
                  <span className="list_option_text">Adult</span>
                  <input
                    type="number"
                    className="list_option_input"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>

                <div className="list_option_Item">
                  <span className="list_option_text">Children</span>
                  <input
                    type="number"
                    className="list_option_input"
                    placeholder={options.children}
                    min={0}
                  />
                </div>

                <div className="list_option_Item">
                  <span className="list_option_text">Room</span>
                  <input
                    type="number"
                    className="list_option_input"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>

            <button className="search_btn">Search</button>
          </div>

          <div className="hotel_list_result">
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelList;
