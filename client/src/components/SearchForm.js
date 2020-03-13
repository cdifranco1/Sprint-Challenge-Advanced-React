import React from 'react';


export const SearchForm = ({onChange, searchTerm}) => {
  return (
    <form>
      <label htmlFor="search">Search by Name: </label>
      <input id="search" placeholder="Alex Morgan" onChange={onChange} value={searchTerm} type="text"/>
    </form>
  )
}