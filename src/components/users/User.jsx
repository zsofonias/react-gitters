import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
      } = this.props.user;
      return (
        <Fragment>
          <Link to='/' className='btn btn-light'>
            Back to Seacrch
          </Link>
          Hireable: {''}
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={avatar_url}
                alt={name}
                className='round-img'
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              <Fragment>
                <h3>Bio</h3>
                <p>{bio ? bio : 'No User Bio'}</p>
              </Fragment>

              <a href={html_url} className='btn btn-dark my-1'>
                Visit Page
              </a>
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong>
                      {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong>
                      {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='card text-center'>
            <div className='badge badge-light'>Followers: {followers}</div>
            <div className='badge badge-success'>Following: {following}</div>
            <div className='badge badge-primary'>
              Public Repos: {public_repos}
            </div>
            <div className='badge badge-dark'>Public Gists: {public_gists}</div>
          </div>
          {this.props.repos.length > 0 && <Repos repos={this.props.repos} />}
        </Fragment>
      );
    }
  }
}

export default User;
