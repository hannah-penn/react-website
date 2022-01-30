import React from "react";

const ProjectsPage = () => {
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Projects</h1>
        <p>
          <li className="page-section">
            Play my text adventure,{" "}
            <a
              href="http://hannahpenn.codes/text-adventure/title.html"
              target="_blank"
              rel="noreferrer"
            >
              Miracle's Mycology Mishap
            </a>
            , made in JavaScript, HTML and CSS.
          </li>
          <li className="page-section">
            Visit my{" "}
            <a
              href="https://www.instagram.com/fauxglove/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            &nbsp;for my collected architectural photos (since 2017) and
            embroidery projects.
          </li>
          <li className="page-section">
            Current WIPs include interactive visual project with JavaScript and
            canvas-sketch package - check back soon.
          </li>
        </p>
      </div>
    </>
  );
};

export default ProjectsPage;
