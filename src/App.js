import "./App.css";
import React from "react";
import { Router } from "@reach/router";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import ProfilePage from "./ProfilePage";
import PageNotFound from "./PageNotFound";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <HomePage path="/" />
        <ContactPage path="/contact" />
        <ProjectsPage path="/projects" />
        <ProfilePage path="/profile" />
        <PageNotFound default />
      </Router>
    </div>
  );
}

export default App;
