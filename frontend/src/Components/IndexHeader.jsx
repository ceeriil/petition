import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import axios from "axios";
import Loader from "../Components/Loader";

function IndexHeader() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let isRequestCancelled = false;
    async function getCount() {
      try {
        const data = await axios.get("/api/user/count");
        if (!isRequestCancelled) {
          setCount(data.data.count);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    getCount();
    return () => {
      isRequestCancelled = true;
    };
  }, []);
  return (
    <div className="text-center py-sm-5" id="indexHeader_text">
      <div>
        <h1 className="rubik fw-bolder  display-5">
          Student platform for Change
        </h1>
        <h4 className="mt-3">
          <span className="blueColor">{count} </span>
          people taking action
        </h4>
        <Link href="/start-a-petition">
          <a className="btn btn_blue btn-lg mt-4">
            <strong>Start Petition</strong>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default IndexHeader;
