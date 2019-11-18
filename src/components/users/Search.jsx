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
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };

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
      </div>
    );
  }
}

export default Search;
