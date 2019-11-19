import React, { Component } from 'react';

class Search extends Component {
  state = {
    text: ''
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Search value is required', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  // handleClearClick = e => {
  //   this.props.clearUsers();
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search User'
            onChange={this.handleInputChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            onClick={this.props.clearUsers}
            className='btn btn-light btn-block'
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
