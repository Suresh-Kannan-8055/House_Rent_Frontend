import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/VNavBar.css";

const ButtonNav = ({ to, icon, iconOutlined, label, collapsed, active }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <div style={{ display: "flex", background: "", height: "45px" }}>
      <div
        className={`nav-button ${collapsed ? "collapsed" : ""} ${
          active ? "active" : ""
        }`}
      >
        <span className="icon">
          {active ? iconOutlined : icon}
        </span>
      </div>
      <p
        className={`label ${active ? "active" : ""}`}
        style={{ display: collapsed ? "none" : "block", fontWeight: "100" }}
      >
        {label}
      </p>
    </div>
  </Link>
);

export default ButtonNav;
