import {
  FaSearch,
  FaUser,
  FaCog,
  FaBell,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

interface NavbarProps {
  activeItem: string;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Navbar = ({ activeItem, sidebarOpen, toggleSidebar }: NavbarProps) => {
  return (
    <nav className="navbar-container">
      <div className="nav-section">
        <button className="hamburger-btn" onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div>
          <p className="nav-path">Pages / {activeItem}</p>
          <h6 className="nav-current">{activeItem}</h6>
        </div>
      </div>

      <div className="nav-actions-section">
        <div className="search-wrapper">
          <FaSearch className="icon-search" />
          <input
            type="text"
            placeholder="Type here..."
            className="search-input"
          />
        </div>
        <div className="nav-user-controls">
          <div className="user-signin">
            <FaUser className="control-icon" />
            <span className="signin-text">Sign In</span>
          </div>
          <FaCog className="control-icon btn-action" />
          <FaBell className="control-icon btn-action" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
