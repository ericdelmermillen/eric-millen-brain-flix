import React from 'react';
import "./Search.scss";

function Search({searchIconStyle, placeholder}) {
  return (
    // should this get is own form with label?
    <input className="search" type="search" placeholder={placeholder} style={searchIconStyle}/>
  )}

export default Search;