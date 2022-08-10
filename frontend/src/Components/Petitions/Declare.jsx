import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "wouter";
import { declareAction } from "../../Redux/Declare/action";
function Declare({data}) {
  const dispatch = useDispatch();
  const [location, setLocation] = useLocation();

  const { loading, redirect, error } = useSelector((state) => state.declare);
  const setDeclare = (id) => {
    dispatch(declareAction(id));
    if (redirect) {
      setLocation(`/p/61fe1f4a499e875c3b275753#details`)
    }
  };

  return (
    <div>
      <h1 className="fw-bold rubik">Congratulations! Declare your victory</h1>
      <div className="alert alert-secondary mt-4" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>
          This petition made change with {data.supporters.length} supporters!
        </p>
        <hr />
        <p className="mb-0">You can now declare your victory</p>
      </div>
      <hr />
      <button
        className="btn btn-danger red-btn rubik"
        onClick={() => setDeclare(data._id)}
      >
        <strong>{loading ? "Loading...." : "Declare Victory"}</strong>
      </button>
      <hr />
      <div className="alert alert-warning">
        <h6>Note after declaring your victory, You can't edit this petition</h6>
      </div>
    </div>
  );
}

export default Declare;
