import React, { useEffect } from "react";
import { supporterAction } from "../Redux/Supporters/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import {Link} from 'wouter'

function Supporters({ id }) {
  window.document.title = "Change - Supporters"
  const dispatch = useDispatch();
  const { loading, data, name } = useSelector((state) => state.supporters);
  useEffect(() => {
    dispatch(supporterAction(id));
  }, []);
  return (
    <div className="container mt-5">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="fw-bold rubik">Supporters of {name}</h1>
          {data && (
            <div>
              {data.map((e, index) => {
                return (
                  <div className="card mt-4" key={index}>
                    <div className="card-body">
                      <h4 className="fs-5">{e.message}</h4>
                    </div>
                    <div className="card-footer">
                    <div className="badge bg-dark">
                     <Link href={`/profile/${e.id}`} className="text-white text-decoration-none">
                     {e.user}
                     </Link>
                    </div>
                      </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Supporters;
