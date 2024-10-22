import { Modal } from "@mui/material";
import React, { useContext } from "react";
import { MyContext } from "../../MyContext";
import "../../Styles/UnitDetails.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HotelSharpIcon from "@mui/icons-material/HotelSharp";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";

const UnitDetails = (props) => {
  const { selectedUnit, openModal } = useContext(MyContext);

  const pricingData = [
    { billName: "Bill Name Here", amount: 1000, discount: 10 },
    { billName: "Bill Name Here", amount: 1000, discount: 10 },
    { billName: "Bill Name Here", amount: 1000 },
    { billName: "Bill Name Here", amount: 1000 },
    { billName: "Bill Name Here", amount: 1000 },
  ];

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      if (item.discount) {
        total += item.amount - (item.amount * item.discount) / 100;
      } else {
        total += item.amount;
      }
    });
    return total;
  };

  const totalAmount = calculateTotal(pricingData);

  return (
    <Modal open={openModal} onClose={props.handleClose}>
      <div className="modal-content">
        <div className="unit-header">
          <p>Unit Details</p>
          <div onClick={props.handleClose} style={{ cursor: "pointer" }}>
            <CloseOutlinedIcon style={{ fontSize: "25px", color: "#7C8594" }} />
          </div>
        </div>
        <div className="unit-details-modal">
          <div className="unit-info-section">
            <div className="images">
              <img
                src={selectedUnit.image}
                alt={selectedUnit.name}
                className="unit-main-image"
              />
              <div className="image-grid">
                {selectedUnit.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.name}
                    alt={`unit-${index}`}
                    className="unit-image-small"
                  />
                ))}
              </div>
            </div>
            <div className="unit-main">
              <div style={{ display: "flex", background: "" }}>
                <h3 className="unit-name">{selectedUnit.name}</h3>
                <p className="unit-number">{selectedUnit.unit_number}</p>
              </div>

              <div className="unit-address">{selectedUnit.address}</div>
              <div>
                <div className="unit-stats">
                  <HotelSharpIcon
                    style={{ color: "#CED3DD", fontSize: "20px" }}
                  />
                  <p className="unit-size">{selectedUnit.rooms}</p>
                  <div className="dot"></div>
                  <BathtubOutlinedIcon
                    style={{ color: "#CED3DD", fontSize: "20px" }}
                  />
                  <p className="unit-size">{selectedUnit.bathrooms}</p>
                  <div className="dot"></div>
                  <HomeOutlinedIcon
                    style={{ color: "#CED3DD", fontSize: "20px" }}
                  />
                  <p className="unit-size">{selectedUnit.bhk}BHK</p>
                  <div className="dot"></div>
                  <MapOutlinedIcon
                    style={{ color: "#CED3DD", fontSize: "20px" }}
                  />
                  <p className="unit-size">
                    {selectedUnit.size}{" "}
                    <span style={{ color: "#CED3DD", fontSize: "13px" }}>
                      Sq.Ft
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="handbook-link">
              <div style={{ display: "flex", marginTop: "5px" }}>
                <CollectionsBookmarkIcon
                  style={{
                    fontSize: "18px",
                    color: "#4E5A6B",
                  }}
                />
                <p> Handbook</p>
              </div>
              <a href="#">View / Download</a>
            </div>
          </div>

          <div>
            <div className="pricing-details-section">
              <h3>UNIT PRICING DETAILS</h3>
              <div className="pricing-items">
                {pricingData.map((item, index) => (
                  <div className="pricing-item" key={index}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>{item.billName}</p>
                    <p className="price">${item.amount.toLocaleString()}</p>
                    </div>
                    {item.discount && (
                      <div className="discount-unit">
                        <span style={{fontSize:"14px",fontWeight:"500"}}>Discount</span>
                        <span>{item.discount}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="final-total">
                <span>Final Total</span>
                <span>${totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UnitDetails;
