import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      if (innerWidth > 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar 
          activeItem={activeItem} 
          setActiveItem={setActiveItem}
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <main className={`main-content ${!sidebarOpen ? "full-width" : ""}`}>
          {activeItem === "Dashboard" && (
            <Navbar 
              activeItem={activeItem} 
              sidebarOpen={sidebarOpen}
              toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route
              path="/tables"
              element={<div className="page-title-only">Tables</div>}
            />
            <Route
              path="/billing"
              element={<div className="page-title-only">Billing</div>}
            />
            <Route
              path="/rtl"
              element={<div className="page-title-only">RTL</div>}
            />
            <Route
              path="/profile"
              element={<div className="page-title-only">Profile</div>}
            />
            <Route
              path="/signin"
              element={<div className="page-title-only">Sign In</div>}
            />
            <Route
              path="/signup"
              element={<div className="page-title-only">Sign Up</div>}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;