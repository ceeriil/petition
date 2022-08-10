import React, { useState } from "react";
import {Link} from 'wouter';
import data from '../data/category'

function Tags() {

  
  return (
    <div className=" fixed">
      <h4>Topics</h4>
      <div className="btns mt-2">
        {
          data.map((e , index) => {
            return(
              <Link href={`/category/${e.key}`} key={index}>
              <a  className="btn btn-outline-dark">{e.name}</a>
              </Link>
            )
          })
        }
        
        
      </div>
    </div>
  );
}

export default Tags;
