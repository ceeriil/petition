import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionById } from "../Redux/Single/action";
import Details from "../Components/Petitions/Details";
import Comment from "../Components/Petitions/Comments";
import Edit from "../Components/Petitions/Edit";
import Declare from "../Components/Petitions/Declare";
import { Link } from "wouter";

function PetitionPage({ id }) {
  window.document.title = "Change - Petitions"
  const dispatch = useDispatch();
  const [d, setD] = useState("");
  const { loading, data, error } = useSelector((state) => state.details);
  const { userInfo } = useSelector((state) => state.login);
  window.document.title = "Change - Petition"
  const [route, setRoute] = useState("details");
  function setKey(key) {
    setRoute(key);
  }

  useEffect(() => {
    setD(data);
  }, [data]);

  const Main = () => {
    if (route == "details") {
      return <Details loading={loading} userInfo={userInfo} data={data} />;
    } else if (route == "comment") {
      return <Comment loading={loading} data={data} />;
    } else if (route == "edit-this-petition") {
      return <Edit />;
    } else if (route == "declare-victory") {
      return <Declare data={data} />;
    }
  };

  useEffect(() => {
    dispatch(petitionById(id));
  }, []);

  return (
    <div style={{ background: "#f6f4f6", minHeight: "100vh" }}>
      <div>
        <div style={{ background: "#fff", borderBottom: "1px solid #c7c7c7" }}>
          <div className="container mt-4">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  href="#details"
                  className={
                    route === "details"
                      ? "nav-link tab-link active"
                      : "nav-link tab-link"
                  }
                  onClick={() => setKey("details")}
                >
                  Petitions Details
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#comment"
                  className={
                    route === "comment"
                      ? "nav-link tab-link active"
                      : "nav-link tab-link"
                  }
                  onClick={() => setKey("comment")}
                >
                  Comments
                </a>
              </li>

              {data && (
                <>
                  {error ||
                  userInfo == undefined  ? null : (
                    <>
                      {data.user.id == userInfo._id ? (
                        <>
                          <li className="nav-item">
                            <a
                              href="#edit-this-petition"
                              className={
                                route === "edit-this-petition"
                                  ? "nav-link tab-link active"
                                  : `nav-link tab-link ${
                                      !data.completed ? "" : "disabled"
                                    }`
                              }
                              onClick={() => setKey("edit-this-petition")}
                            >
                              Edit this petition
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              href="#declare-victory"
                              className={
                                route === "declare-victory"
                                  ? "nav-link tab-link active"
                                  : `nav-link tab-link ${
                                      data.supporters.length ===
                                      data.expectedVote
                                        ? ""
                                        : "disabled"
                                    } ${!data.completed ? "" : "disabled"}`
                              }
                              onClick={() => setKey("declare-victory")}
                            >
                              Declare victory
                            </a>
                          </li>
                        </>
                      ) : null}
                    </>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="container mt-5">
          {error ||
          userInfo == undefined ||
          Object.keys(userInfo).length == 0 ? (
            <div className="alert alert-success">
              You need to{" "}
              <Link href="/login" className="alert-link">
                login
              </Link>{" "}
              to sign a petition
            </div>
          ) : null}
          <Main />
        </div>
      </div>
    </div>
  );
}

export default PetitionPage;
