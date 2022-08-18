import React, { useEffect } from "react";
import { Link } from "wouter";
import { useSelector, useDispatch } from "react-redux";
import { commentAction, removeComment } from "../../Redux/Comment/action";
import * as timeago from "timeago.js";
import Loader from "../Loader";
import { useState } from "react";
import cat from "../../data/category";
import axios from "axios";
import config from "../../Config/header";

function Details({ data, loading, userInfo }) {
  const { loader, messages, errors } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);
  const [check, setCheck] = useState(false);
  const [comment, setComment] = useState("");
  const [ano, setAno] = useState(true);
  useEffect(() => {
    if (data && userInfo) {
      const checkExists = data.supporters.some((e) => e.id == userInfo._id);
      setExists(checkExists);
      const commentAdd = data.supporters.filter((e) => e.id == userInfo._id);
      setComment(commentAdd[0]);
      if (data.user.id == userInfo._id) {
        setCheck(true);
      }
    }
  }, [data]);

  const handleRemove = (id) => {
    dispatch(removeComment(id));
  };

  const [message, setMessage] = useState("");

  const onChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const messageObj = {
      message: message,
      id: data._id,
      display: ano,
    };
    dispatch(commentAction(messageObj));
  };

  const filter = (id) => {
    const name = cat.filter((e) => e.key === id);
    return name[0].name;
  };

  const deletePet = async () => {
    if (window.confirm("Are you sure you want to delete this petition")) {
      const res = await axios.delete(
        "/api/petition/delete/" + data._id,
        config
      );
      if (res.data.status) {
        window.location.href = "/";
      }
    }
  };

  return (
    <div>
      {data == null || data == undefined ? (
        <Loader />
      ) : (
        <div>
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              {messages ? (
                <div className="alert alert-success">{messages}</div>
              ) : null}
              {errors ? (
                <div className="alert alert-danger">{errors}</div>
              ) : null}

              <div className="col-sm-12 col-md-8">
                {data.completed ? (
                  <div className="alert alert-success">
                    <div className="alert-heading fs-5 fw-bold">Well done!</div>
                    <hr />
                    <p className="mt-2 fs-5">
                      Author of this petition has declared this petition was
                      victorious
                    </p>
                  </div>
                ) : null}
                <h1 className="rubik display-5 fw-bold mb-2">{data.title}</h1>

                <div className="d-flex justify-content-between">
                  <div>
                    <div className="badge bg-dark">
                      <Link
                        href={`/profile/${data.user.id}`}
                        className=" text-white text-decoration-none"
                      >
                        {data.user.userName}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <span className=" fs-6  blueColor fw-bold">
                      Started this petition: {timeago.format(data.createdAt)}
                    </span>
                  </div>

                  <div>
                    <h6>
                      Category:{" "}
                      <Link
                        href={`/category/${data.category}`}
                        className="blueColor text-capitalize"
                      >
                        {filter(data.category)}
                      </Link>
                    </h6>
                  </div>
                </div>
                <hr />
                <p className="fs-5 mt-4">{data.description}</p>
              </div>
              <div className="col ">
                <h1 className="fs-4">
                  Signature Goal: {data.supporters.length} of{" "}
                  {data.expectedVote}
                </h1>
                <div>
                  <div className="progress mt-4">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated bg-teal"
                      role="progressbar"
                      style={{
                        width: `${Math.floor(
                          (data.supporters.length / data.expectedVote) * 100
                        )}%`,
                      }}
                    ></div>
                  </div>
                  <hr />
                  {data.completed ? null : (
                    <div className="mt-4">
                      {check ? (
                        <div>
                          {data.completed ? (
                            <div className="alert alert-success" role="alert">
                              <h4 className="alert-heading">Well done!</h4>
                              <p>
                                This petition made change with{" "}
                                {data.supporters.length} supporters!
                              </p>
                              <hr />
                              <p className="mb-0">
                                Author of this petition has declared this
                                petition was victorious
                              </p>
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <>
                          {userInfo == undefined ? null : (
                            <div>
                              {Object.keys(userInfo).length !== 0 ? (
                                <div>
                                  {!exists ? (
                                    <form onSubmit={onSubmit}>
                                      <h1 className="fs-2">
                                        {userInfo.userName}
                                      </h1>
                                      <textarea
                                        className="form-control mt-3"
                                        cols={20}
                                        rows={5}
                                        name="comment"
                                        value={message}
                                        onChange={onChange}
                                        placeholder="I am signing because....."
                                        required
                                      ></textarea>
                                      <div class="form-check mt-4">
                                        <input
                                          class="form-check-input"
                                          type="checkbox"
                                          value="true"
                                          id="flexCheckDefault"
                                          onChange={() => setAno(!ano)}
                                          checked={ano}
                                        />
                                        <label
                                          class="form-check-label"
                                          htmlFor="flexCheckDefault"
                                        >
                                          Display my name on the comment?
                                        </label>
                                      </div>
                                      <button
                                        type="submit"
                                        className="btn mt-4"
                                        disabled={loading}
                                      >
                                        {loader ? (
                                          <strong>Loading</strong>
                                        ) : (
                                          <strong>Sign this petition</strong>
                                        )}
                                      </button>
                                    </form>
                                  ) : (
                                    <div>
                                      {comment !== null ? (
                                        <div className="card mt-4">
                                          <div className="card-body">
                                            <div className="card-title rubik">
                                              <Link
                                                href={`/profile/${comment._id}`}
                                                className="text-dark text-decoration-none"
                                              >
                                                {comment.user}
                                              </Link>
                                            </div>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                              {timeago.format(
                                                comment.createdAt
                                              )}
                                            </h6>
                                            <p>{comment.message}</p>
                                          </div>
                                          <div className="card footer">
                                            <button
                                              className={`btn btn-danger btn-sm ${
                                                data.completed ? "disabled" : ""
                                              }`}
                                            >
                                              {data.completed ? (
                                                <strong>
                                                  You can't remove sign after
                                                  declaring victory
                                                </strong>
                                              ) : (
                                                <strong
                                                  className="rubik"
                                                  onClick={() =>
                                                    handleRemove(data._id)
                                                  }
                                                >
                                                  Remove Sign
                                                </strong>
                                              )}
                                            </button>
                                          </div>
                                        </div>
                                      ) : (
                                        <Loader />
                                      )}
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  {check ? (
                    <button
                      className="btn btn-danger"
                      onClick={() => deletePet()}
                    >
                      <strong>Remove petition</strong>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
