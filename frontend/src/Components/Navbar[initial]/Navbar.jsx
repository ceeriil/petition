import React, { useState } from "react";
import "../../Css/main.css";
import { Link } from "wouter";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand fs-3 rubik blueColor" href="#">
            <strong>BIU Petition</strong>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/start-a-petition">
                <a className="nav-link">Start a petitions</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/petitions">
                <a className="nav-link">Browse</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link "
                href="https://github.com/DevAthul-88/Change-Org-Clone"
                target="_blank"
              >
                Help
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
