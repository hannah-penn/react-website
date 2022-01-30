import React from "react";
import cv from "./files/cv.pdf";

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact me</h1>
      <p>
        <li className="page-section">
          Drop me a line on{" "}
          <span id="email-address">hannahrosepenn@gmail.com</span> or&nbsp;
          <a href={cv} download="cv-hannah-penn.pdf">
            click to download my CV
          </a>
          .
        </li>
        <li className="page-section">
          Visit my profiles on{" "}
          <a
            href="www.linkedin.com/in/hannahpenncodes"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          and{" "}
          <a
            href="https://github.com/hannah-penn"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </li>
      </p>
    </div>
  );
};

export default ContactPage;
