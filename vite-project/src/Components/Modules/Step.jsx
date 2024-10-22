import React, { useState } from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Breadcrumbs} from "@mui/material";


const Step = () => {
  const [breadcrumbs, setBreadCrumbs] = useState([
    {
      name: "Add Contact",
    },
    {
      name: "Lead Details",
    },
    {
      name: "Preview and Create Lead",
    },
    {
      name: "Quotation Details",
    },
    {
      name: "Preview and Create",
      step: 4,
    },
  ]);
  return (
    <div className="form-tracker">
      <Breadcrumbs
        separator={
          <ArrowForwardIosOutlinedIcon
            fontSize="inhereit"
            style={{ color: "#5078E1" }}
          />
        }
      >
        {breadcrumbs?.map((step) => {
          return (
            <div className="breadcrumb">
              {step.step && (
                <div className="step">
                  <div>{step.step}</div>
                </div>
              )}
              {step.name}
            </div>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Step;
