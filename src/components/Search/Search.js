import React from 'react';
import "./Search.scss";

function Search({searchIconStyle, placeholder}) {
  return (
    <>
    <input className="search" type="text" placeholder={placeholder} style={searchIconStyle}/>
    </>
  )
}

export default Search;