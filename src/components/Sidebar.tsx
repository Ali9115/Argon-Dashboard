import { Link } from "react-router-dom";
import illustration from "../assets/documentation-illustration.png";
import argonLogo from "../assets/argon-logo.svg";
import chakraLogo from "../assets/chakra-logo.svg";
import "./Sidebar.css";
import {
  FaHome,
  FaChartBar,
  FaCreditCard,
  FaTools,
  FaUser,
  FaFileAlt,
  FaRocket,
  FaTimes,
} from "react-icons/fa";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeItem,
  setActiveItem,
  isOpen,
  setIsOpen,
}) => {
  const mainLinks = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Tables", icon: <FaChartBar />, path: "/tables" },
    { name: "Billing", icon: <FaCreditCard />, path: "/billing" },
    { name: "RTL", icon: <FaTools />, path: "/rtl" },
  ];

  const accountLinks = [
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Sign In", icon: <FaFileAlt />, path: "/signin" },
    { name: "Sign Up", icon: <FaRocket />, path: "/signup" },
  ];

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
      <div className={`sidebar-box ${isOpen ? "open" : ""}`}>
        <button className="sidebar-close" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>

        <div className="logo-area">
          <div className="logo-content">
            <div className="logo-item">
              <img src={argonLogo} alt="argon" className="header-logo-svg" />
            </div>
            <span className="divider-pipe">|</span>
            <div className="logo-item">
              <img src={chakraLogo} alt="chakra" className="header-logo-svg" />
            </div>
          </div>
          <hr className="logo-hr" />
        </div>

        <div className="menu-group">
          {mainLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActiveItem(item.name);
                if (window.innerWidth <= 1024) setIsOpen(false);
              }}
            >
              <div
                className={`menu-item ${activeItem === item.name ? "active" : ""}`}
              >
                <div className="icon-box">{item.icon}</div>
                <span className="menu-text">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="section-label">ACCOUNT PAGES</div>
        <div className="menu-group">
          {accountLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: "none" }}
              onClick={() => {
                setActiveItem(item.name);
                if (window.innerWidth <= 1024) setIsOpen(false);
              }}
            >
              <div
                className={`menu-item ${activeItem === item.name ? "active" : ""}`}
              >
                <div className="icon-box">{item.icon}</div>
                <span className="menu-text">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="sidebar-footer">
          <img src={illustration} alt="docs" className="help-img" />
          <h5 className="help-title">Need help?</h5>
          <p className="help-desc">Please check our docs</p>
          <button className="btn-common btn-blue">DOCUMENTATION</button>
          <button className="btn-common btn-dark">UPGRADE TO PRO</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
