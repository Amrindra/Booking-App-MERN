import "./HotelList.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchResult from "../../components/searchResult/SearchResult";
import useFetch from "../../hooks/useFetch";

const HotelList = () => {
  //This location will contain the informations from the Header component where we search, select date and option from Header component
  const location = useLocation();
  const [destination, setDestination] = useState(location.state?.destination);
  const [dates, setDates] = useState(location.state?.dates);
  const [options, setOptions] = useState(location.state?.options);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  // console.log(location);
  console.log(destination);

  const { data, loading, reFetchData } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`
  );

  const handleClick = () => {
    reFetchData();
  };

  return (
    <>
      <Navbar />
      <Header type="list" />

      {/* Hotel list search section */}
      <section className="hotel_list_container">
        <div className="hotel_list_warpper">
          <div className="hotel_list_result">
            {loading ? (
              "Loading data..."
            ) : (
              <>
                {data.map((item) => (
                  // passing item as props
                  <SearchResult item={item} key={item._id} />
                ))}
              </>
            )}
          </div>

          <div className="hotel_list_search">
            <h1 className="hotel_list_title">Search</h1>
            <div className="hotel_list_items">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="hotel_list_items">
              <label>Check-in Date</label>
              <span
                className="date_picker_span"
                onClick={() => setShowDatePicker(!showDatePicker)}
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>

              {showDatePicker && (
                <DateRange
                  onChange={(item) => setDates([item.section])}
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="hotel_list_items">
              <label>Options</label>
              <div className="list_option_wrapper">
                <div className="list_option_Item">
                  <span className="list_option_text">Min price per night</span>
                  <input
                    type="number"
                    min={0}
                    onChange={(e) => setMin(e.target.value)}
                    className="list_option_input"
                  />
                </div>

                <div className="list_option_Item">
                  <span className="list_option_text">Max price per night</span>
                  <input
                    type="number"
                    min={0}
                    onChange={(e) => setMax(e.target.value)}
                    className="list_option_input"
                  />
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

            <button onClick={handleClick} className="search_btn">
              Search
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotelList;
