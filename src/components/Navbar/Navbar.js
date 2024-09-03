import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-search-container">
        <Link to="/" className="serach-item">
          Home
        </Link>
        <Link to="/about" className="serach-item">
          About
        </Link>
        <Link to="/contact" className="serach-item">
          Contact
        </Link>
      </div>
    </>
  );
}

export default Navbar;
