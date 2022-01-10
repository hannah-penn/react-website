import React from "react";
import { Link } from "@reach/router";

const PageNotFound = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Page not found :(</h1>
      <li className="page-section">How did you get here?</li>
      <Link className="page-section" to="/">
        Click to go to the homepage.
      </Link>
    </div>
  );
};

export default PageNotFound;
