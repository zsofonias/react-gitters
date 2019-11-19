import React from 'react';

const ReposItem = ({ repo }) => {
  return (
    <div className='card' style={repoItemStyle}>
      <h3>
        <a href={repo.html_rul}>{repo.name}</a>
      </h3>
    </div>
  );
};

const repoItemStyle = {
  cursor: 'pointer'
};

export default ReposItem;
