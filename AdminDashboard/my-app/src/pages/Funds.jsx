import React from 'react'

const Funds = () => {
  const funds = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
    // Add more posts here
  ];

  return (
    <div>
      <h1>Funds Page</h1>
      {funds.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p className='content'>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Funds
