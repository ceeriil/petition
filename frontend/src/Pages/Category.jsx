import React from "react";
import datas from "../data/category";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { categoryAction } from "../Redux/Category/action";
import Loader from "../Components/Loader";
import Post from "../Components/Post/Post";
import Nothing from '../image/nothing.png'

function Category({ id }) {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.category);
  window.document.title = "Change - Category"
  const name = datas.filter((e) => e.key == id);
  useEffect(() => {
    dispatch(categoryAction(id));
  }, []);
  return (
    <div className="container mt-5">
      {
        <div>
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1 className="rubik fw-bold">{name[0].name}({data ? data.length : 0 })</h1>
              {error ? (
                <div className="text-center ">
                  <img src={Nothing} alt="nothing" srcset="" className="img-fluid"/>
                </div>
              ) : (
                <div>
                  {data && (
                    <div>
                      {data.length < 1 ||data == undefined ? (
                        <h1>Nothing found</h1>
                      ) : (
                        <Post petitions={data} />
                      )}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      }
    </div>
  );
}

export default Category;
