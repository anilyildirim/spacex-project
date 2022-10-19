import React from "react";

const SearchForm = ({ handleSubmit, handleChange, searchQuery }) => {
  return (
    <form className="search-form" onSubmit={ handleSubmit }>
      <input placeholder="searchbar" type="text" onChange={ handleChange } value={ searchQuery } required/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default SearchForm;