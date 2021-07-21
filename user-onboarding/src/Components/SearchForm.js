import React, { useState } from 'react'

const SearchForm = props => {
  // define a placeholder for search field value
  const [search, setSearch] = useState('')
  // function that packages placeholder with new search value derived from user input

  const handleInputChange = e => {
    const search = e.target.value
    setSearch(e.target.value)
    console.log(search)
  }

  //  function that sends new search data to parent component
  const submitSearch = () => {
    const newSearch = search
    props.search(newSearch)
    setSearch('')
  }

  // display search form component
  return (
    <div>
      <form className='search-form' onSubmit={e => submitSearch(e)}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search for...'
          onChange={e => handleInputChange(e)}
        />
        <input type='submit' className='search-button' />
      </form>
    </div>
  )
}

export default SearchForm
