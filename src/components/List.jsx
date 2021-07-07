import React from 'react';

const List = ({repos}) => {
//   const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <div  className='list'>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <div key={repo.id} style={{ border: '2px solid green', margin: '0.4rem', display: 'inline', height: '100px', width: 'auto' }}>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </div>
        );
      })}
    </div>
  );
};
export default List;
