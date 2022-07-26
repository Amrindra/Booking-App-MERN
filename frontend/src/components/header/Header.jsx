import "./Header.scss";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [destination, setDestination] = useState("");
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        // [name] come from the parameters passing through onClick. "adult, children, room"
        [name]:
          operation === "decrement" ? options[name] - 1 : options[name] + 1
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    //Sending destination, date, and options state to hotel page
    //To get these state information we can use useLocation from react-router-dom
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "header_container list_mode" : "header_container"
        }
      >
        <div className="header_lists">
          <div className="header_list_item active">
            <FontAwesomeIcon icon={faBed} />
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className="header_list_item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="header_title">Why let the discounts go away?</h1>
            <p className="header_desc">
              Get rewarded for your travels & unlock instant savings of 10%
            </p>
            <button className="header_button">Sign in or Register</button>

            <div className="header_search">
              <div className="header_search_item">
                <FontAwesomeIcon icon={faBed} className="header_icon" />
                <input
                  type="text"
                  placeholder="Search"
                  className="header_search_input"
                  onChange={(event) => setDestination(event.target.value)}
                />
              </div>

              <div className="header_search_item">
                <FontAwesomeIcon
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  icon={faCalendarDays}
                  className="header_icon"
                />
                <span
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className="header_search_text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>

                {/* This DateRange is from react-date-range library */}
                {showDatePicker && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date_picker"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="header_search_item">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="header_icon"
                  onClick={() => setShowOptions(!showOptions)}
                />
                <span
                  className="header_search_text"
                  onClick={() => setShowOptions(!showOptions)}
                >
                  {`${options.adult} adult - ${options.children} children - ${options.room} room`}
                </span>

                {showOptions && (
                  <div className="options">
                    <div className="option_items">
                      <span className="option_text">Adult</span>
                      <div className="option_counter_wrapper">
                        <button
                          disabled={options.adult <= 1}
                          className="option_counter_button"
                          onClick={() => handleOption("adult", "decrement")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.adult}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("adult", "increment")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option_items">
                      <span className="option_text">Children</span>
                      <div className="option_counter_wrapper">
                        <button
                          disabled={options.children <= 0}
                          className="option_counter_button"
                          onClick={() => handleOption("children", "decrement")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.children}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("children", "increment")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="option_items">
                      <span className="option_text">Room</span>
                      <div className="option_counter_wrapper">
                        <button
                          disabled={options.room <= 1}
                          className="option_counter_button"
                          onClick={() => handleOption("room", "decrement")}
                        >
                          -
                        </button>
                        <span className="option_counter_number">
                          {options.room}
                        </span>
                        <button
                          className="option_counter_button"
                          onClick={() => handleOption("room", "increment")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="header_search_item">
                <button className="header_button" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
