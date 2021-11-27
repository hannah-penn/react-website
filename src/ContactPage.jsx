import React from "react";

const ContactPage = () => {
  return (
    <div id="contact-form-container">
      <h1 id="contact-heading">Contact me</h1>
      <input placeholder="Your name"></input>
      <input placeholder="Your email address"></input>
      <textarea placeholder="Your message"></textarea>
      <button>Submit</button>
    </div>
  );
};

export default ContactPage;
