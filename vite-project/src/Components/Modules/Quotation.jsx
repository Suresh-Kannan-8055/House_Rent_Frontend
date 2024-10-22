import React, { useState } from "react";
import "../../Styles/Quotation.css";
import { Divider } from "@mui/material";

const QuotationSummary = () => {
  const [quotation, setQuotation] = useState({
    total_amount: 2100,
    total_discount: 900,
    total_refundable: 0,
    total_tax: 0,
    grand_total: 0,
  });

  const [units] = useState([]);

  return (
    <>
      <div style={{ padding: "15px 20px", background: "#fff" }}>
        <div className="quotation-summary">
          <div className="title">Quotation Summary</div>
          <div className="table">
            {quotation !== undefined && (
              <div className="table-column">
                <div className="top">
                  <div className="table-title">
                    <div>Description</div>
                    <div>Qty</div>
                    <div>Amount</div>
                  </div>
                  <Divider />
                  <div className="rows">
                    <div>Total Amount</div>
                    <div>{units?.length}</div>
                    <div style={{ fontWeight: "bold", color: "#091B29" }}>
                      $ {quotation?.total_amount?.toFixed(2) || "0.00"}
                    </div>
                  </div>
                  <div className="rows">
                    <div>Total Discount</div>
                    <div>
                      {(
                        (quotation?.total_discount / quotation?.total_amount) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div>-$ {quotation?.total_discount?.toFixed(2)}</div>
                  </div>
                  <Divider />
                  <div className="rows">
                    <div>Total Refundable</div>
                    <div>
                      {(
                        (quotation?.total_refundable /
                          quotation?.total_amount) *
                        100
                      ).toFixed(2)}
                      %
                    </div>
                    <div>
                      $ {quotation?.total_refundable?.toFixed(0) || "0.00"}
                    </div>
                  </div>
                  <Divider />
                  <div className="rows">
                    <div>Total Tax</div>
                    <div>18%</div>
                    <div style={{ fontWeight: "bold", color: "#091B29" }}>
                      $ {quotation?.total_tax?.toFixed(2) || "0.00"}
                    </div>
                  </div>
                  <Divider />
                </div>
                <div className="bottom">
                  <Divider />
                  <div className="rows" style={{marginTop:"10px"}}>
                    <div style={{fontSize:"14px",fontWeight:"bold",color:"#091B29"}}>Quote Amount</div>
                    <div></div>
                    <div style={{ fontWeight: "bold", color: "#091B29" }}>
                      $ {quotation?.grand_total?.toFixed(2) || "0.00"}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotationSummary;
