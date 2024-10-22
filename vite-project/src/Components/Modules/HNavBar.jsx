import React, { useState, useEffect, useRef } from "react";
import { Avatar, Badge } from "@mui/material";
import "../../Styles/HNavBar.css";
import SearchBar from "../Buttons/SearchBar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const HNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for the dropdown

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="header">
      <div className="logo">
        <img src="/main_logo.svg" alt="logo" />
        <span className="Hline" />
        <div className="nav-title">PROPERTY MANAGEMENT SOLUTION</div>
      </div>
      <div className="Searchbar">
        <SearchBar />
      </div>
      <div className="rightheader">
        <div className="notification">
          <Badge
            sx={{
              "& .MuiBadge-anchorOriginTopRightCircular": {
                margin: "4px",
                border: "2px solid #000",
                padding: "3px",
                backgroundColor: "#5078e1",
                borderRadius: "100%",
              },
            }}
            overlap="circular"
            variant="dot"
          >
            <NotificationsOutlinedIcon
              className="icon"
              sx={{ display: "block" }}
            />
          </Badge>
        </div>
        <span className="Hline" />
        <div>
          <Avatar sx={{ height: "30px", width: "30px" }} src="/user.jpeg" />
        </div>
        <div className="userDetails">
          <div className="name">Bala Ganesh</div>
          <div className="role">Super Admin</div>
        </div>
        <div
          onClick={toggleDetails}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          {isOpen ? (
            <KeyboardArrowUpOutlinedIcon style={{ color: "white" }} />
          ) : (
            <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
          )}
        </div>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="userExtraDetails"
          style={{
            position: "absolute",
            top: "60px",
            right: "10px",
            backgroundColor: "#000",
            padding: "10px 20px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            zIndex: 1000,
            color: "#fff",
          }}
        >
          <div className="rightheader">
            <div>
              <Avatar sx={{ height: "50px", width: "50px" }} src={profile} />
            </div>
            <div className="userDetails" style={{ marginLeft: "15px" }}>
              <div style={{ fontSize: "18px" }}>Bala Ganesh</div>
              <div className="role">Super Admin</div>
              <div style={{ fontSize: "12px" }}>Email: bala.ganesh@example.com</div>
              <div style={{ fontSize: "12px" }}>Phone: +91 1234567890</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HNavBar;
