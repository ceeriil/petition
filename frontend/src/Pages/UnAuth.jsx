import React from 'react';
import UnAuths from '../image/unauth.png'

function UnAuth() {
  window.document.title = "Change - Uh"
  return <div style={{background:'#f9fafc'}}>
       <img src={UnAuths} alt="401"  className='mx-auto d-block'/>
  </div>;
}

export default UnAuth;
