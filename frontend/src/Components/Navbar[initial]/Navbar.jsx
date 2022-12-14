import React, { useState } from "react";
import "../../Css/main.css";
import { Link } from "wouter";
import Logo from "../../image/logo.svg";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand fs-4 rubik text-uppercase" href="/">
            {/*             <img src={Logo} alt="logo" className="logo" />
             */}{" "}
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
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
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
                href="mailto: simonorugbo15@gmail.com"
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
