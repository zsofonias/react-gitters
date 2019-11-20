import React, { useState, useContext } from 'react';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/Alert/AlertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  // const handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  const handleInputChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.createAlert('Search value is required', 'danger');
    } else {
      githubContext.searchUsers(text);
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
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className='btn btn-light btn-block'
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
