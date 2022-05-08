import React from "react";
import ReactTooltip from "react-tooltip";
import MMMthumbnail from "./files/MMM-thumbnail.png";
import Gv1thumbnail from "./files/Gazetteer-v1-thumbnail.png";
import Gv2thumbnail from "./files/Gazetteer-thumbnail.png";

const ProjectsPage = () => {
  return (
    <>
      <div className="page-container">
        <h1 className="page-title">Projects</h1>
        <p>
          <li className="page-section">
            <ReactTooltip />
            <img
              src={Gv2thumbnail}
              className="project-thumbnail"
              alt="Gazetteer version 2 thumbnail"
              data-tip="An SPA which uses multiple RESTful APIs to provide specific<br />
            information about a chosen country/the user's location. <br/><br /> This app
            uses an API I wrote and researched myself to provide<br /> information on
            a typical dish served in each country, <br/> and is made with Bootstrap,
            HTML, CSS, JavaScript (including<br /> the Leaflet, EasyButton,
            ExtraMarkers, MarkerCluster, DateJS, and<br /> NumeralJS plugins) and PHP."
              data-type="light"
              data-effect="solid"
              data-multiline="true"
              data-place="right"
            ></img>
            <br></br>
            <br></br>
            <a
              href="https://hannahpenn.codes/G-v2/index.html"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Gazetteer (version 2)
            </a>
          </li>
          <li className="page-section">
            <ReactTooltip />
            <img
              src={Gv1thumbnail}
              className="project-thumbnail"
              alt="Gazetteer version 1 thumbnail"
              data-tip="Version 1 of Gazetteer provides basic functionality,<br /> and was redesigned to be
              more user-friendly and provide<br /> information in a more engaging way. 
              Re-structuring <br />Gazetteer's design and implementing more
              functionality <br />was a really useful and fun process and I definitely
              learned<br /> a lot by doing so."
              data-type="light"
              data-effect="solid"
              data-multiline="true"
              data-place="right"
            ></img>
            <br></br>
            <br></br>
            <a
              href="https://hannahpenn.codes/project1/index.html"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Gazetteer (version 1)
            </a>
          </li>
          <li className="page-section">
            <ReactTooltip />
            <img
              src={MMMthumbnail}
              className="project-thumbnail"
              alt="Miracle's Mycology Mishap thumbnail"
              data-tip="My text adventure is made in JavaScript, HTML and CSS. <br />
              It's based on my homebrew Dungeons &amp; Dragons campaign, <br/>which I've been running since May 2020."
              data-type="light"
              data-effect="solid"
              data-multiline="true"
              data-place="right"
            ></img>
            <br></br>
            <br></br>
            <a
              href="http://hannahpenn.codes/text-adventure/title.html"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Miracle's Mycology Mishap
            </a>
          </li>
          <br />
          <br />
        </p>
      </div>
    </>
  );
};

export default ProjectsPage;
