import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ButtonNav from "../Buttons/NavButton";
import "../../Styles/VNavBar.css";
import { MyContext } from "../../MyContext";
import DashboardIcon from '@mui/icons-material/Dashboard';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BackupIcon from '@mui/icons-material/Backup';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Person2Icon from '@mui/icons-material/Person2';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const VNavBar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(MyContext);

  const location = useLocation();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`} style={{cursor:"pointer"}}>
      <div className="sidebar-header">
        <div
          className="sidebar-icon"
          style={{
            borderBottom: "2px solid #666",
            width: isCollapsed ? "40px" : "240px",
          }}
        >
          {!isCollapsed ? (
            <div style={{display:"flex",justifyContent:"space-between"}}   onClick={toggleSidebar}>
              <div className="sidebar-title">
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
            to="/404-notfound"
            icon={<DashboardIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<DashboardOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Dashboard"
            collapsed={isCollapsed}
            active={location.pathname === "/404-notfound"}
          />

          <ButtonNav
            to="/createQuotation"
            icon={<GroupsIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<GroupsOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Companies"
            collapsed={isCollapsed}
            active={location.pathname === "/createQuotation"}
          />
          <ButtonNav
            to="/"
            icon={<BusinessIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<BusinessOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Owners"
            collapsed={isCollapsed}
            active={location.pathname === "/order"}
          />
          <ButtonNav
            to="/"
            icon={<Person2Icon style={{ fontSize: "20px" }} />}
            iconOutlined={<Person2OutlinedIcon style={{ fontSize: "20px" }} />}
            label="Properties"
            collapsed={isCollapsed}
            active={location.pathname === "/costomer"}
          />
          <ButtonNav
            to="/"
            icon={<LocalOfferIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<LocalOfferOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Pricing"
            collapsed={isCollapsed}
            active={location.pathname === "/items"}
          />
          <ButtonNav
            to="/"
            icon={<SettingsIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<SettingsOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Setting"
            collapsed={isCollapsed}
            active={location.pathname === "/inventory"}
          />
          <ButtonNav
            to="/"
            icon={<BackupIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<BackupOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Data Management"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<ArticleIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<ArticleOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Reports"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<FolderCopyIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<FolderCopyOutlinedIcon style={{ fontSize: "20px" }} />}
            label="Documents"
            collapsed={isCollapsed}
            active={location.pathname === "/alerts"}
          />
          <ButtonNav
            to="/"
            icon={<CommentIcon style={{ fontSize: "20px" }} />}
            iconOutlined={<CommentOutlinedIcon style={{ fontSize: "20px" }} />}
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
