import React from 'react';
import "./Search.scss";

function Search({searchIconStyle, placeholder, classname}) {
  return (
    <>
    <input className={`${classname}__search`} type="text" placeholder={placeholder} style={searchIconStyle}/>
    </>
  )
}

export default Search;