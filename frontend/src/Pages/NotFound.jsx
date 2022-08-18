import React from "react";
import NotFoundImage from "../image/notfound.svg";

function NotFound() {
  window.document.title = "BIU Petiton - NotFound";
  return (
    <div>
      <img
        src={NotFoundImage}
        alt="404"
        srcset=""
        className="mx-auto d-block pt10"
        style={{ width: "60%" }}
      />
    </div>
  );
}

export default NotFound;
