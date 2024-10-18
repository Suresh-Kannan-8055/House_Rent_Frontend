import { Outlet } from "react-router-dom";
import HNavBar from "../../Components/HNavBar";
import { useState } from "react";
import { MyContext } from "../../MyContext";
import VNavBar from "../../Components/VNavBar";

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <MyContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      <div
        style={{
          height: "97vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <HNavBar />
        </div>
        <div style={{ display: "flex", height: "100%" }}>
          <div className="sidebarLayout">
            <VNavBar />
          </div>
          <div style={{ width: "100%", height: "100%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default Layout;
