import React from "react";
import { Link } from "@reach/router";

const ProfilePage = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Profile</h1>
      <p>
        <li className="page-section">
          Before starting to learn about coding, I was working in the mental
          health &amp; wellbeing department of a London university. My role
          there was very varied and I was responsible for the day-to-day running
          of the department as well as being the first point of contact for all
          students.
        </li>
        <li className="page-section">
          Since deciding to change career, I've been learning various aspects of
          front- and back-end engineering, including HTML, CSS, JavaScript,
          Python, React + Redux, Express, data science and database management
          with SQL. I'm currently in the process of completing{" "}
          <a
            href="https://itcareerswitch.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            IT Career Switch's
          </a>{" "}
          full-stack coding course and passed Microsoft 98-383 with a score of
          95% in 2022. You can see some of my projects on my{" "}
          <Link to="/projects">Projects</Link> page.{" "}
        </li>
        <li className="page-section">
          In my spare time, I make linocut, collage and textile art, cook, run a
          homebrew D&amp;D campaign, and play videogames. I also like taking
          photos of interesting architecture, which you can see on my{" "}
          <a
            href="https://www.instagram.com/fauxglove/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          .
        </li>
      </p>
    </div>
  );
};

export default ProfilePage;
