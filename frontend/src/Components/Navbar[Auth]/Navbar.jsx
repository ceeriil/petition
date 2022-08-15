import React, { useState } from "react";
import "../../Css/main.css";
import { logOutAction } from "../../Redux/Login/action";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../image/logo.svg";
import { Link } from "wouter";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);
  const [activeDrop, setActiveDrop] = useState(false);

  function LogOut() {
    dispatch(logOutAction());
    window.location.href = "/login";
  }
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand fs-4 rubik text-uppercase" href="/">
            <img src={Logo} alt="logo" className="logo" />
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
              <Link href={`/profile/${user.userInfo._id}`}>
                <a className="nav-link">My petitions</a>
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
                href="https://github.com/ceeriil"
                target={"_blank"}
              >
                Help
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                onClick={() => setActiveDrop(!activeDrop)}
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                {user.userInfo.userName}
              </a>
              <ul
                className={`dropdown-menu ${activeDrop ? "d-block" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link href={`/profile/${user.userInfo._id}`}>
                    <a className="dropdown-item">Profile</a>
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={LogOut}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
