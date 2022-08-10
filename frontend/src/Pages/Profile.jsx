import React, { useEffect, useState } from "react";
import { Link , useLocation } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import profileAction from "../Redux/Profile/action";
import Signed from "../Components/Petitions/Signed";
import Started from "../Components/Petitions/Started";
import Loading from "../Components/Loader";
import * as timeago from "timeago.js";

function Profile({ id }) {
  window.document.title = "Change - Profile"
  const [location, setLocation] = useLocation()
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.login);
  const { loading, profile } = useSelector((state) => state.profile);
  const [route, setRoute] = useState("started");

  useEffect(() => {
    dispatch(profileAction(id));
    if(userInfo == null || Object.keys(userInfo).length == 0) {
      setLocation(`/UnAuthorized`)
    }
  }, []);

  function setKey(key) {
    setRoute(key);
  }

  const Main = () => {
    if (route == "started") {
      return <Started />;
    } else {
      return <Signed />;
    }
  };

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : profile !== undefined ? (
        <div className="mt-5">
          {userInfo._id == profile._id ? (
            <div>
              <div className="text-center">
                <h1 className="text-capitalize display-2 fw-bold rubik">
                  {profile.userName}
                </h1>
                <h5>Joined: {timeago.format(profile.createdAt)}</h5>
                <p className="fs-5 mt-4">
                  {profile.description ? profile.description : null}
                </p>
                <Link href={`/me/edit`}>
                  <a className="btn mt-4 btn-outline-dark">
                    <strong>Edit Profile</strong>
                  </a>
                </Link>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderBottom: "1px solid #c7c7c7",
                }}
              >
                <div className="container mt-5">
                  <ul className="nav justify-content-center mt-5">
                    <li className="nav-item">
                      <a
                        href="#started"
                        className={
                          route === "started"
                            ? "nav-link tab-link active"
                            : "nav-link tab-link"
                        }
                        onClick={() => setKey("started")}
                      >
                        Started
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#signed"
                        className={
                          route === "signed"
                            ? "nav-link tab-link active"
                            : "nav-link tab-link"
                        }
                        onClick={() => setKey("signed")}
                      >
                        Signed
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="container mt-5">
                <Main />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-capitalize display-2 fw-bold rubik">
                {profile.userName}
              </h1>
              <h5>Joined: {timeago.format(profile.createdAt)}</h5>
              <p className="fs-5 mt-4">
                {profile.description ? profile.description : null}
              </p>
              <hr />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
