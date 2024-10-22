import React, { useContext, useState } from "react";
import "../../Styles/Unit.css";
import { Card, Modal, IconButton, Menu, MenuItem } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { MyContext } from "../../MyContext";
import Buttons from "../Buttons/Buttons";
import HotelSharpIcon from "@mui/icons-material/HotelSharp";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import UnitDetails from "../Modals/UnitDetails";

const UnitCards = () => {
  const {
    units,
    setUnits,
    selectedUnit,
    setSelectedUnit,
    openModal,
    setOpenModal,
    anchorEls,
    setAnchorEls,
  } = useContext(MyContext);

  const [activeButtons, setActiveButtons] = useState({});
  const [priceshow, setpriceshow] = useState({});

  const handleCardClick = (unit) => {
    setSelectedUnit(unit);
    setOpenModal(true);
  };

  const handleDiscountshow = (unitId) => {
    setpriceshow((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const handleDelete = (id) => {
    const updatedUnits = units.filter((unit) => unit.id !== id);
    setUnits(updatedUnits);
  };

  const handleMenuClick = (event, id) => {
    setAnchorEls((prev) => ({ ...prev, [id]: event.currentTarget }));
    setActiveButtons((prev) => ({ ...prev, [id]: false }));
  };

  const handleMenuClose = (id) => {
    setAnchorEls((prev) => ({ ...prev, [id]: null }));
    setActiveButtons((prev) => ({ ...prev, [id]: true }));
  };

  const handleClose = () => {
    setOpenModal(false);
    if (selectedUnit) {
      setActiveButtons((prev) => ({ ...prev, [selectedUnit.id]: false }));
    }
  };

  return (
    <div className="unit">
      <p className="unit-title">Unit Details</p>
      <div
        style={{ height: "398px", overflowY: "scroll", scrollbarWidth: "none" }}
      >
        <div className="unit-grid">
          {units.map((unit) => (
            <div key={unit.id} className="unit-card">
              <div
                onClick={() => handleCardClick(unit)}
                style={{ padding: "11.5px" }}
              >
                <img src={unit.image} className="unit-image" alt="unit" />
                <div className="unit-details">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2 className="unit-name">{unit.name}</h2>
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleDiscountshow(unit.id);
                      }}
                    >
                      {!priceshow[unit.id] &&
                      unit.discountApplied &&
                      unit.discountprice !== unit.price ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div className="discount">% Discount Applied</div>
                          <p
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDiscountshow(unit.id);
                            }}
                            className="unit-price"
                            style={{
                              color: "#FF9340",
                            }}
                          >
                            ${unit.discountprice?.toLocaleString() || 0}
                          </p>
                        </div>
                      ) : (
                        <p
                          className="unit-price"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the modal when discount is toggled
                            handleDiscountshow(unit.id);
                          }}
                        >
                          ${unit.price?.toLocaleString() || 0}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ display: "flex", height: "16px" }}>
                    <p className="unit-location">{unit.location}</p>
                    <div className="dot"></div>
                    <p className="unit-size">{unit.size} Sq.Ft</p>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    className="unit-room"
                  >
                    <HotelSharpIcon
                      style={{ color: "#98A0AC", fontSize: "20px" }}
                    />
                    <p className="unit-size">{unit.rooms}</p>
                    <div className="dot"></div>
                    <BathtubOutlinedIcon
                      style={{ color: "#98A0AC", fontSize: "20px" }}
                    />
                    <p className="unit-size">{unit.bathrooms}</p>
                    <div className="dot"></div>
                    <HomeOutlinedIcon
                      style={{ color: "#98A0AC", fontSize: "20px" }}
                    />
                    <p className="unit-size">{unit.bhk}BHK</p>
                  </div>
                </div>
              </div>

              <IconButton
                onClick={() => handleDelete(unit.id)}
                style={{
                  position: "absolute",
                  width: "26px",
                  height: "26px",
                  top: "18px",
                  right: "23px",
                  background: "#F5F7FA",
                }}
              >
                <DeleteOutlineOutlinedIcon
                  style={{ fontSize: "15px", color: "#FF4B4B" }}
                />
              </IconButton>
              <div style={{ width: "100%", textAlign: "center" }}>
                <Buttons
                  onClick={(e) => handleMenuClick(e, unit.id)}
                  text="Customise"
                  icon={<AddOutlinedIcon style={{ fontSize: "18px" }} />}
                  border="none"
                  borderRadius="4px"
                  fontSize="12px"
                  fontWeight="600"
                  color="#5078E1"
                  hoverbackground="none"
                  activebackground="#F1F7FF"
                  background={activeButtons[unit.id] ? "#F1F7FF" : "#fff"}
                />
              </div>

              <Menu
                anchorEl={anchorEls[unit.id]}
                open={Boolean(anchorEls[unit.id])}
                onClose={() => handleMenuClose(unit.id)}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "left",
                }}
                PaperProps={{
                  style: {
                    marginLeft: "8px",
                    marginTop: "0px",
                  },
                }}
                className="customise-menu"
              >
                <MenuItem className="all-menus" onClick={() => handleMenuClose(unit.id)}>
                  Add Pricing Component
                </MenuItem>
                <MenuItem className="all-menus" onClick={() => handleMenuClose(unit.id)}>
                  Add Amenities
                </MenuItem>
                <MenuItem className="all-menus" onClick={() => handleMenuClose(unit.id)}>
                  Add Utilities
                </MenuItem>
                <MenuItem className="all-menus" onClick={() => handleMenuClose(unit.id)}>
                  Add Discount
                </MenuItem>
                <MenuItem className="all-menus" onClick={() => handleMenuClose(unit.id)}>
                  Remove Component
                </MenuItem>
              </Menu>
            </div>
          ))}

          {selectedUnit && (
            <UnitDetails handleClose={handleClose}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default UnitCards;
