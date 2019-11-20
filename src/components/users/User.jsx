import React, { useEffect, Fragment } from 'react';

import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';

const User = ({ getUser, getUserRepos, match, ...props }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  if (props.loading) {
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
    } = props.user;
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
        {props.repos.length > 0 && <Repos repos={props.repos} />}
      </Fragment>
    );
  }
};

export default User;
