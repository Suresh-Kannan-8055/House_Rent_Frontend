import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <div className="arrow" style={{ marginRight: "10px" }}>
          <KeyboardArrowLeftIcon
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              fontWeight: "bold",
              background: "#E4E8EE",
              borderRadius: "50%",
            }}
          />
          <h1>Create Quotation To Existing Lead</h1>
        </div>
        <div className="head-box">
          <h2
            style={{
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            Casagrand
          </h2>
          <KeyboardArrowDownIcon
            style={{
              marginLeft: "10px",
              fontSize: "26px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
