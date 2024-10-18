import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonNav from "./Buttons/NavButton";
import "../Styles/VNavBar.css";
import { MyContext } from "../MyContext";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessIcon from '@mui/icons-material/Business';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BackupIcon from '@mui/icons-material/Backup';
import ArticleIcon from '@mui/icons-material/Article';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CommentIcon from '@mui/icons-material/Comment';
import Person2Icon from '@mui/icons-material/Person2';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const VNavBar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(MyContext);

  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div
          className="sidebar-icon"
          style={{
            borderBottom: "2px solid #666",
            width: isCollapsed ? "40px" : "240px",
          }}
        >
          {!isCollapsed ? (
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div className="sidebar-title" onClick={toggleSidebar}>
                Property Manager For
                <br />
                Start up
              </div>
              <div className="close" style={{marginRight:"10px"}} onClick={toggleSidebar}>
              <KeyboardArrowLeftIcon
                style={{ marginLeft: "10px", fontSize: "20px", }}
              />
            </div>
            </div>
          ) : (
            <div className="open" onClick={toggleSidebar}>
              <KeyboardArrowRightIcon
                style={{ marginLeft: "10px", fontSize: "20px" }}
              />
            </div>
          )}
        </div>
      </div>

      <div className="sidebar-menu">
        <div className="menu-section">
          <ButtonNav
            to="/"
            icon={<DashboardIcon style={{ fontSize: "20px" }} />}
            label="Dashboard"
            collapsed={isCollapsed}
            active={location.pathname === "/dashboard"}
          />

          <ButtonNav
            to="/createQuotation"
            icon={<GroupsIcon style={{ fontSize: "20px" }} />}
            label="Companies"
            collapsed={isCollapsed}
            active={location.pathname === "/createQuotation"}
          />
          <ButtonNav
            to="/"
            icon={<BusinessIcon style={{ fontSize: "20px" }} />}
            label="Owners"
            collapsed={isCollapsed}
            active={location.pathname === "/order"}
          />
          <ButtonNav
            to="/"
            icon={<Person2Icon style={{ fontSize: "20px" }} />}
            label="Properties"
            collapsed={isCollapsed}
            active={location.pathname === "/costomer"}
          />
          <ButtonNav
            to="/"
            icon={<LocalOfferIcon style={{ fontSize: "20px" }} />}
            label="Pricing"
            collapsed={isCollapsed}
            active={location.pathname === "/items"}
          />
          <ButtonNav
            to="/"
            icon={<SettingsIcon style={{ fontSize: "20px" }} />}
            label="Setting"
            collapsed={isCollapsed}
            active={location.pathname === "/inventory"}
          />
          <ButtonNav
            to="/"
            icon={<BackupIcon style={{ fontSize: "20px" }} />}
            label="Data Management"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<ArticleIcon style={{ fontSize: "20px" }} />}
            label="Reports"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<FolderCopyIcon style={{ fontSize: "20px" }} />}
            label="Documents"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<CommentIcon style={{ fontSize: "20px" }} />}
            label="Communications"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
        </div>
      </div>
    </div>
  );
};

export default VNavBar;
