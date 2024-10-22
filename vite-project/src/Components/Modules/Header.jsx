import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Casagrand");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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
        <div className="head-box" style={{ position: "relative" }}>
          <h2
            style={{
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            {selectedOption}
          </h2>
          {isOpen ? (
            <KeyboardArrowUpOutlinedIcon style={{
                marginLeft: "10px",
                fontSize: "26px",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}/>
          ) : (
            <KeyboardArrowDownIcon style={{
                marginLeft: "10px",
                fontSize: "26px",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}/>
          )}
          {isOpen && (
            <div
              className="dropdown"
              style={{
                position: "absolute",
                top: "33px",
                right:"0px",
                backgroundColor: "#fff",
                width:"160px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                padding: "10px",
                borderRadius: "10px",
                fontSize:"14px"
              }}
            >
              <div
                className="dropdown-option"
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderRadius:"10px"
                }}
                onClick={() => handleOptionClick("Casagrand")}
              >
                Casagrand
              </div>
              <div
                className="dropdown-option"
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderRadius:"10px"
                }}
                onClick={() => handleOptionClick("Another Option")}
              >
                Another Option
              </div>
              <div
                className="dropdown-option"
                style={{
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderRadius:"10px"
                }}
                onClick={() => handleOptionClick("Third Option")}
              >
                Third Option
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
