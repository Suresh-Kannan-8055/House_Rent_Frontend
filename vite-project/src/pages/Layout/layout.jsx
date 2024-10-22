import { Outlet } from "react-router-dom";
import HNavBar from "../../Components/Modules/HNavBar";
import VNavBar from "../../Components/Modules/VNavBar";
import { MyContextProvider } from "../../MyContext";

const Layout = () => {
  return (
    <MyContextProvider>
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
    </MyContextProvider>
  );
};

export default Layout;
