import React from 'react';

function Loader() {
  return <div className="text-center">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>;
}

export default Loader;
