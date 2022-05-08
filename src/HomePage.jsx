import React from "react";
import { Link } from "@reach/router";

const HomePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome</h1>
      <p>
        <li className="page-section">
          Hi! My name is Hannah and I'm a programmer living in London.
        </li>
        <li className="page-section">
          I chose to learn coding because I wanted to try something different
          that would make use of the skills I developed in my previous
          employment, and following some self-directed learning I decided that
          coding would be a great fit for me.{" "}
        </li>
        <li className="page-section">
          I'm looking for my first programming role! Have a look at my{" "}
          <Link to="/projects">Projects</Link>
          &nbsp;page to see what I've been working on, or download my CV via
          the&nbsp;
          <Link to="/contact">Contact</Link> page.
        </li>
        <li className="page-section">
          This website is made in React with Reach router.
        </li>
      </p>
    </div>
  );
};

export default HomePage;
