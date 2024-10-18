import { Avatar, Badge } from "@mui/material";
import "../Styles/HNavBar.css";
import SearchBar from "./SearchBar";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import profile from "../assets/man.jpg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const HNavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/main_logo.svg"></img>
        <span className="Hline" />
        <div className="title">PROPERTY MANAGEMENT SOLUTION</div>
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
          <Avatar
            sx={{ height: "30px", width: "30px", aspectRatio: "1/1" }}
            src={profile}
          ></Avatar>
        </div>
        <div className="userDetails">
          <div className="name">Bala Ganesh</div>
          <div className="role">Super Admin</div>
        </div>
        <div >
          <KeyboardArrowDownOutlinedIcon style={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default HNavBar;
