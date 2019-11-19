import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
  const { avatar_url, login } = user;
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        className='round-img'
        alt=''
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        {/* <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a> */}
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
