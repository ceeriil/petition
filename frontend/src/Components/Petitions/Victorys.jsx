import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { petitionVictory } from "../../Redux/Discover/action";
import Post from "../Post/Post";
import Loader from "../Loader";

function Victory() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.discover);

  useEffect(() => {
    dispatch(petitionVictory());
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : !data || data === null || data == undefined ? (
        <h1 className="text-center rubik fw-bold">Nothing found</h1>
      ) : data.message ? (
        <h1 className="text-center fs-bold rubik">{data.message}</h1>
      ) : Object.values(data)[0].length < 1 ? (
        <h1 className="text-center rubik fw-bold">Nothing found</h1>
      ) : (
        <Post petitions={data} />
      )}
    </div>
  );
}

export default Victory;
