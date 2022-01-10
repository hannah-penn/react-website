import React from "react";
import cv from "./files/cv.pdf";

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact me</h1>
      <p>
        <li className="page-section">
          Drop me a line on hannahrosepenn@gmail.com or&nbsp;
          <a href={cv} download="cv-hannah-penn.pdf">
            click to download my CV.
          </a>
        </li>
      </p>
    </div>
  );
};

export default ContactPage;
