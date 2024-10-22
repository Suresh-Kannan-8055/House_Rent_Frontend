import React, { useState } from "react";
import Button from "@mui/material/Button";

const Buttons = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(!isActive);
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Button
      startIcon={props.icon}
      sx={{
        textTransform: "none",
        width: props.width || "auto",
        height: props.height || "auto",
        color: props.color || "#000",
        padding: "5px 15px",
        fontSize: props.fontSize || "14px",
        fontWeight: props.fontWeight || "bold",
        margin: props.margin || "0",
        background: isActive
          ? props.activebackground || "#F1F7FF"
          : props.background || "#fff",
        border: props.border || "2px solid #E4E8EE",
        borderRadius: props.borderRadius || "8px",
        cursor: "pointer",
        "&:hover": {
          background: props.hoverbackground || "#f0f0f0",
        },
      }}
      disableRipple={true}
      onClick={handleClick}
    >
      {props.text}
    </Button>
  );
};

export default Buttons;
