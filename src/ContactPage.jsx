import React from "react";
import cv from "./files/hannah-penn-cv.pdf";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_7scc4ot";
const TEMPLATE_ID = "template_0v80jdh";
const USER_ID = "-1PgLF9_zcq4GNks3";

const ContactPage = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message sent",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title:
            "Oops, something went wrong. Check Hannah's CV for their email address.",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className="page-container">
      <h1 className="page-title">Contact me</h1>
      <p>
        <li className="page-section">
          Send me a message or&nbsp;
          <a href={cv} download="hannah-penn-cv.pdf">
            click to download my CV
          </a>
          .
        </li>
        <br />
        <li className="page-section">
          Visit my profiles on{" "}
          <a
            href="www.linkedin.com/in/hannahpenncodes"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          &nbsp;and{" "}
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
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
          className="form-field"
        />
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
          className="form-field"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          className="form-field"
          required
        />
        <Button
          type="submit"
          color="red"
          id="form-submit-button"
          className="form-field"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactPage;
