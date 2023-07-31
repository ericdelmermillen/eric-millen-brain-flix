import React from 'react';
import "./Search.scss";

function Search({labelText,  placeholder, searchIconStyle, searchId}) {

  return (
    <form action="" className="search__form">

      <label htmlFor={searchId} className="search__label">
        {labelText}
      </label>

      <input id={searchId} className="search" type="search" placeholder={placeholder} style={searchIconStyle}/>

    </form>
  )};

export default Search;