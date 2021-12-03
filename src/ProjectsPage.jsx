import React from "react";

const ProjectsPage = () => {
  return (
    <>
      <div id="projects-container">
        <li className="project-preview">
          Creative visual project (JavaScript with canvas-sketch)
        </li>
        <li className="project-preview">Text adventure (JavaScript)</li>
        <li className="project-preview">
          <a href="https://www.instagram.com/fauxglove/" target="_blank">
            Architectural photos and textile art (Instagram API)
          </a>
        </li>
        <li className="project-preview">Github</li>
      </div>
    </>
  );
};

export default ProjectsPage;
