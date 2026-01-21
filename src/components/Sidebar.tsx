import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  FaHome,
  FaChartBar,
  FaCreditCard,
  FaTools,
  FaUser,
  FaFileAlt,
  FaRocket,
} from "react-icons/fa";
import { SiLightning } from "react-icons/si";
import { RiHexagonLine } from "react-icons/ri";

interface SidebarProps {
  activeItem: string;
  setActiveItem: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
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
    <div className="sidebar-box">
      <div className="logo-area">
        <div className="logo-content">
          <span className="bold-text">
            <RiHexagonLine /> argon
          </span>
          <span className="divider-pipe">|</span>
          <span className="light-text">
            <SiLightning /> chakra
          </span>
        </div>
        <hr className="logo-hr" />
      </div>

      <div className="menu-group">
        {mainLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            style={{ textDecoration: "none" }}
            onClick={() => setActiveItem(item.name)}
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
            onClick={() => setActiveItem(item.name)}
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
    </div>
  );
};

export default Sidebar;
