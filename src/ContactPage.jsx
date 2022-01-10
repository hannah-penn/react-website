import React from "react";
import cv from "./files/cv.pdf";

const ContactPage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Contact me</h1>
      <p>
        <li className="page-section">
          You can reach me by email on hannahrosepenn@gmail.com.
        </li>
        <li className="page-section">
          {/* <a
            href="https://docs.google.com/document/d/1wuaLve-8lyRCvjIc1BAFshNi65Hcb8LvwW4raBanI8s/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          > */}
          <a href={cv} download="cv-hannah-penn.pdf">
            Download my CV.
          </a>
        </li>
      </p>
    </div>
  );
};

export default ContactPage;
