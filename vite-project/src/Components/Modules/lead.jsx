import React, { useState } from "react";
import "../../Styles/Lead.css";

const LeadPage = () => {
  const [lead, Setlead] = useState({
    name: "Tom Cruise",
    usage: "Prospect",
    phone: "+91 9090808012",
    email: "Tomcruise2515@mail.com",
    image: "/download.jpeg",
  });
  const [quotation, setquotation] = useState({
    leaseDates: [
      {
        label: "LEASE START DATE",
        date: "30 Jan 22",
      },
      {
        label: "LEASE END DATE",
        date: "30 Jan 23",
      },
      {
        label: "RENT START DATE",
        date: "30 Jan 23",
      },
    ],
    gracePeriod: {
      label: "GRACE PERIOD",
      duration: "90 Days",
      note: "(Beginning)",
    },
  });

  return (
    <>
      <div className="lead-side">
        <div
          style={{ borderBottom: "2px solid #E4E8EE", paddingBottom: "25px" }}
        >
          <p>Lead Details</p>
          <div className="lead-details">
            <div>
              <img
                style={{ height: "30px", width: "30px" }}
                src={lead.image}
                alt="lead"
              />
            </div>
            <div className="user-details" style={{ marginLeft: "10px" }}>
              <div>
                <p
                  className="lead-name"
                  style={{ fontSize: "14px", color: "#091B29" }}
                >
                  {lead.name}
                </p>
                <p className="lead-usage">{lead.usage}</p>
              </div>
              <div
                style={{
                  marginTop: "5px",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <p className="lead-phone">{lead.phone}</p>
                <div className="dot"></div>
                <p className="lead-email">{lead.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="qutation-details">
          <p>Quotation Details</p>
          <div className="quotation-timing">
            {quotation.leaseDates.map((lease, index) => (
              <div key={index}>
                <h6>{lease.label}</h6>
                <p className="quotation-date">{lease.date}</p>
              </div>
            ))}
          </div>
          <div className="grace">
            <h6 className="grace-period">{quotation.gracePeriod.label}</h6>
            <p className="quotation-date">
              {quotation.gracePeriod.duration}
              <span style={{ color: "#98A0AC", fontWeight: "400" }}>
                {quotation.gracePeriod.note}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadPage;
