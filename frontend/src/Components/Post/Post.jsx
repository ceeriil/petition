import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { useSelector } from "react-redux";
import * as timeago from "timeago.js";
import data from "../../data/category";

function Post({ petitions }) {
  const { userInfo, error } = useSelector((state) => state.login);

  const filter = (id) => {
    const name = data.filter((e) => e.key == id);
    return name[0].name;
  };

  return (
    <div>
      {petitions.map((e, index) => {
        return (
          <div className="card mt-4" key={index}>
            <div className="card-body">
              <div className="card-title">
                <h3 className=" text-capitalize ">
                  <Link
                    href={`/p/${e._id}`}
                    className="text-light text-decoration-none post_link rubik"
                  >
                    {e.title}
                  </Link>
                </h3>
              </div>

              <div className="card-text">
                <p className="fs-6 text-truncate">{e.description}</p>
              </div>

              <div>
                <h5 className="fs-6">
                  Created by:{" "}
                  <span className=" badge bg-dark">{e.user.userName}</span>{" "}
                  <span>{timeago.format(e.createdAt)}</span>
                </h5>

                <div className="d-grid">
                  {error || Object.keys(userInfo).length == 0 ? (
                    <>
                      {e.supporters.length !== e.expectedVote ? (
                        <Link href={`/p/${e._id}`}>
                          <a
                            className="btn btn-block"
                            style={{ width: "100%" }}
                          >
                            <strong>Sign this petition</strong>
                          </a>
                        </Link>
                      ) : null}
                    </>
                  ) : (
                    <div>
                      {e.supporters.some((e) => e.id == userInfo._id) ? (
                        <a
                          className="btn btn-block disabled"
                          style={{ width: "100%" }}
                        >
                          <strong>Voted</strong>
                        </a>
                      ) : (
                        <>
                          {e.supporters.length !== e.expectedVote ? (
                            <Link href={`/p/${e._id}`}>
                              <a
                                className="btn btn-block"
                                style={{ width: "100%" }}
                              >
                                <strong>Sign this petition</strong>
                              </a>
                            </Link>
                          ) : null}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-between">
              <h5 className="rubik fs-6">
                {e.supporters.length}{" "}
                <span className="blueColor">
                  <Link
                    href={`/supporters/${e._id}`}
                    className="text-decoration-none blueColor"
                  >
                    Supporters
                  </Link>
                </span>
              </h5>

              <div>
                <h5 className="ml-4 rubik fs-6">
                  {e.completed ? (
                    <h5 className="rubik fw-bold fs-6">Victory</h5>
                  ) : (
                    <>
                      Needs {e.expectedVote - e.supporters.length} more
                      signatures
                    </>
                  )}
                </h5>
              </div>

              <h5 className="rubik fs-6">
                <span>
                  <i className="fa fa-folder" aria-hidden="true"></i> Category:{" "}
                </span>
                <Link href={`/category/${e.category}`}>
                  <a className="blueColor">{filter(e.category)}</a>
                </Link>
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
