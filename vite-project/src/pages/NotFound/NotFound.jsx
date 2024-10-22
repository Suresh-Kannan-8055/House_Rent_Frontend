import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-header">404</h1>
      <h2 className="not-found-subheader">Page Not Found</h2>
      <p className="not-found-message">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/createQuotation" className="not-found-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
