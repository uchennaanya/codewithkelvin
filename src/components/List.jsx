import React from 'react';

const List = ({repos}) => {
//   const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul  className='list'>
      <h2 className='list-head'>Available Public Repositories</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id}>
            <span className='repo-text'>{repo.name} </span>
            <span className='repo-description'>{repo.description}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
