import React, { useState } from 'react'

const SearchForm = props => {
  const [query, setQuery] = useState('')

  const resetInputField = () => {
    setQuery('')
  }
  const submitSearch = event => {
    event.preventDefault()
    props.search(query)
    resetInputField()
  }

  const handleInputChange = event => {
    setQuery(event.target.value)
    console.log(query)
  }
  return (
    <div>
      <form className='search-form' onChange={handleInputChange}>
        <input
          className='search-bar'
          type='text'
          value={query}
          placeholder='Search for...'
        />
        <input
          type='submit'
          className='search-button'
          onClick={submitSearch}
          value='SEARCH'
        />
      </form>
    </div>
  )
}

export default SearchForm
