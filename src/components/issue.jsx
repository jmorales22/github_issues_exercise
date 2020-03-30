import React from 'react';

const Issue = props => {

  const { issue } = props;

  return (
    <div>
      <p>
        {issue.url} 
      </p>
      <p>
      {issue.title}
      </p>
      <p>
      {issue.body}
      </p>
    </div>
  );
};

export default Issue;