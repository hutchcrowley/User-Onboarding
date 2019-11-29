import React, { useState } from 'react';

const SearchForm = props => {
  const [query, setQuery] = useState('');

  const resetInputField = () => {
      setQuery('');
    };
    const submitSearch = event => {
        event.preventDefault();
        props.search(query);
        resetInputField();
    };

     const handleInputChange = event => {
        setQuery(event.target.value);
        console.log(query);
      };
  return (
    <form className='search-form'>
      <input className='search-bar' type='text' value={query} onChange={handleInputChange} placeholder='Search for...' />

      <input type='submit' className='search-button' onClick={submitSearch} value='SEARCH' />
    </form>
  );
};

export default SearchForm;
