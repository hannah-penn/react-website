import React from "react";

const ProfilePage = () => {
  return (
    <div id="profile-container">
      <p id="profile-blurb">
        <li className="profile-section">
          Hi! My name is Hannah and I'm a programmer living in London.
        </li>
        <li className="profile-section">
          I first started learning to code in 2021; before that, I was working
          at a university in the mental health &amp; wellbeing department from
          2016-2021.
        </li>
        <li className="profile-section">
          I chose to learn coding because I wanted to try something different
          that would make use of the skills I developed in my previous
          employment, and following some self-directed learning I decided that
          coding would be a great fit for me.{" "}
        </li>
        <li className="profile-section">
          Since mid-2021, I've been learning various aspects of front- and
          back-end engineering, including HTML, CSS, Python, React + Redux,
          Express, data science and database management with SQL. I'm currently
          in the process of completing{" "}
          <a href="https://itcareerswitch.co.uk/">IT Career Switch's</a> coding
          course, which includes Microsoft accreditation. You can see some of my
          projects on my Projects page.{" "}
        </li>
        <li className="profile-section">
          In my spare time, I make linocut, collage and textile art, do a lot of
          cooking, take long walks whenever I can, and play videogames. I also
          like taking photos of interesting architecture, which you can see on
          my Instagram.
        </li>
      </p>
      <button id="cv-button">Download my CV!</button>
    </div>
  );
};

export default ProfilePage;
