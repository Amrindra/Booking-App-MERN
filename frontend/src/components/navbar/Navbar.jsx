import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to="/">
          <span className="navbar_logo">Booking</span>
        </Link>

        <div className="navbar_items">
          <button className="navbar_button">Sign Up</button>
          <button className="navbar_button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
