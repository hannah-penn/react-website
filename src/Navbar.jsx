import React, { memo } from "react";
import { Link } from "@reach/router";

const Navbar = memo(() => {
  return (
    <div>
      <nav id="navbar">
        <h1 id="navbar-title">HannahPenn.codes</h1>
        <h2 id="mobile-title">hp</h2>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/profile">
          Profile
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
      </nav>
    </div>
  );
});

export default Navbar;
