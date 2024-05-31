import React from 'react'

const Partners = () => {
      const partner = [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
            // Add more posts here
      ];

      return (
            <div>
                  <h1>Partners Page</h1>
                  {partner.map(post => (
                        <div key={post.id}>
                              <h2>{post.title}</h2>
                              <p className='content'>{post.content}</p>
                        </div>
                  ))}
            </div>
      );
};

export default Partners
