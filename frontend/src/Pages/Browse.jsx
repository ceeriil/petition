import React, { useState } from "react";
import Featured from "../Components/Petitions/Featured";
import Popular from "../Components/Petitions/Popular";
import Recent from "../Components/Petitions/Recent";
import Victorys from "../Components/Petitions/Victorys";

function Browse() {
  window.document.title = "Change - Browse"
  const [route, setRoute] = useState("featured");

  function setKey(key) {
    setRoute(key);
  }

  const Main = () => {
    if (route == "featured") {
      return <Featured />;
    } else if (route == "popular") {
      return <Popular />;
    } else if (route == "recent") {
      return <Recent />;
    } else {
      return <Victorys />;
    }
  };

  return (
    <div style={{ background: "#f6f4f6", minHeight: "100vh" }}>
      <div style={{ background: "#fff", borderBottom: "1px solid #c7c7c7" }}>
        <div className="container mt-4">
          <h2 className="text-center rubik">Discover petitions</h2>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                href="#featured"
                className={
                  route === "featured"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("featured")}
              >
                Featured
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#popular"
                className={
                  route === "popular"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("popular")}
              >
                Popular
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#recent"
                className={
                  route === "recent"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("recent")}
              >
                Recent
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#victory"
                className={
                  route === "victory"
                    ? "nav-link tab-link active"
                    : "nav-link tab-link"
                }
                onClick={() => setKey("victory")}
              >
                Victorys
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-5">
        <Main />
      </div>
    </div>
  );
}

export default Browse;
