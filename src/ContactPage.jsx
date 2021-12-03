import React from "react";

const ContactPage = () => {
  return (
    <div id="contact-form-container">
      <h1 id="contact-heading">Contact me</h1>
      <input placeholder="Your name" className="contact-input" required></input>
      <input
        placeholder="Your email address"
        className="contact-input"
        required
      ></input>
      <textarea
        placeholder="Your message"
        className="contact-input"
        required
        maxLength="3000"
      ></textarea>
      <button id="contact-submit-button">Submit</button>
    </div>
  );
};

export default ContactPage;
