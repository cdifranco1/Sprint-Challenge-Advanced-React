import React from 'react';




export const SearchForm = ({onChange}) => {
  return (
    <form>
      <label htmlFor="search">Search by Name: </label>
      <input placeholder="Alex Morgan" onChange={onChange} type="text"/>
    </form>
  )
}