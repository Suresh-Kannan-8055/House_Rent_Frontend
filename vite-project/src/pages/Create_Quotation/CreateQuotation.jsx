import React from "react";
import "../../Styles/CreateQuotation.css";
import Header from "../../Components/Modules/Header";
import Step from "../../Components/Modules/Step";
import LeadPage from "../../Components/Modules/lead";
import QuotationSummary from "../../Components/Modules/Quotation";
import Buttons from "../../Components/Buttons/Buttons";
import UnitCards from "../../Components/Modules/Unit";

const CreateQuotation = () => {
  return (
    <>
      <div className="main">
        <Header />
        <div className="body">
          <div className="master">
            <Step />
            <div className="main-body">
              <LeadPage />
              <UnitCards/>
              <QuotationSummary />
            </div>
            <div
              style={{
                padding: "15px 20px 20px 20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <Buttons text="Previous" />
              </div>
              <div>
                <Buttons text="Cancel" margin="0 10px" />
                <Buttons
                  text="Create Quotation"
                  background="#5078E1"
                  color="#fff"
                  border="2px solid #5078E1"
                  fontWeight="400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuotation;