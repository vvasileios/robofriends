import React from "react";

// using destructuring (grabs props, object and its properties)
const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue" 
        type='search' 
        placeholder='search robofriends'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;