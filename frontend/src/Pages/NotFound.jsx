import React from 'react';
import NotFoundImage from '../image/notfound.png' 

function NotFound() {
  window.document.title = "Change - NotFound"
  return <div>
     <img src={NotFoundImage} alt="404" srcset="" className='mx-auto d-block'/>
  </div>;
}

export default NotFound;
