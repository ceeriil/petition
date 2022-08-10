import React from "react";
import Loader from "../Loader";
import { Link } from "wouter";
import { removeComment } from "../../Redux/Comment/action";
import { useSelector, useDispatch } from "react-redux";
import * as timeago from "timeago.js";

function Comments({ loading, data }) {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeComment(id));
  };

  const { userInfo } = useSelector((state) => state.login);
  return (
    <div>
      <h1 className="fs-4 rubik">Reasons for signing</h1>
      <p className="fs-5">
        See why other supporters are signing, why this petition is important to
        them, and share your reason for signing (this will mean a lot to the
        starter of the petition).
      </p>
      <hr />
      {loading ? (
        <Loader />
      ) : (
        <div>
          {data.supporters.map((e, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-body">
                  <h5 className="card-title rubik">
                    <Link
                      href={e.display ? `/profile/${e.id}` : "#"}
                      className="text-dark text-decoration-none"
                    >
                      {e.display ? e.user : "Anonymous"}
                    </Link>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {timeago.format(e.createdAt)}
                  </h6>
                  <p> {e.message}</p>
                </div>

                {userInfo == undefined ? null : (
                  <>
                    {data.user.id == userInfo._id ? null : (
                      <div>
                        {e.id === userInfo._id ? (
                          <div className="card-footer">
                            {data.completed ? (
                              <button className="btn rubik btn-danger btn-sm disabled">
                                <strong>
                                  You can't remove sign after declaring victory
                                </strong>
                              </button>
                            ) : (
                              <button
                                className="btn rubik btn-danger btn-sm"
                                onClick={() => handleRemove(data._id)}
                              >
                                <strong>Remove Sign</strong>
                              </button>
                            )}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comments;
