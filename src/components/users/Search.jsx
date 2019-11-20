import React, { useState } from 'react';

const Search = ({ searchUsers, createAlert, showClear, clearUsers }) => {
  const [text, setText] = useState('');

  // const handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  const handleInputChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      createAlert('Search value is required', 'danger');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search User'
          onChange={handleInputChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button onClick={clearUsers} className='btn btn-light btn-block'>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
