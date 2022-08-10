import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import categories from "../data/category";
import { useLocation } from "wouter";

function StartPetition() {
  window.document.title = "Change - Start";
  const [location, setLocation] = useLocation();
  const [key, setKey] = useState("");

  const { userInfo } = useSelector((state) => state.login);

  function addKey(id) {
    setKey(id);
  }

  function nextFunc() {
    if (Object.keys(userInfo).length !== 0) {
      setLocation(`/start-a-petition/${key}`);
    } else {
      setLocation("/login");
    }
  }

  return (
    <div className="container mt-5">
      <h1>What kind of issue are you petitioning on?</h1>
      <h5 className="mt-3">
        Selecting a topic allows Change.org to recommend your petition to
        interested supporters.
      </h5>

      <div className="card-sec mt-5 row">
        {categories.map((e, index) => {
          return (
            <div
              className="cards col-sm-12 col-md-6 col-lg-4 mt-4"
              key={index}
              onClick={() => addKey(e.key)}
            >
              <div
                className="card text-center"
                id="card"
                style={e.key == key ? { background: "#ecdbbd" } : null}
              >
                <div className="card-body">
                  <h1 className="blueColor">
                    <i className={e.icon}></i>
                  </h1>
                  <h5 className="mt-3">{e.name}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="btn btn-danger btn_red  float-end"
        onClick={() => nextFunc()}
        disabled={key == "" ? "disabled" : null}
      >
        <strong>Continue</strong>
      </button>
    </div>
  );
}

export default StartPetition;
