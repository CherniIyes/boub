import React from 'react';
import './Blog.css';

const Blog = () => {
      const blogPosts = [
            { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
            { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
            // Add more posts here
      ];

      return (
            <div>
                  <h1>Blog Page</h1>
                  {blogPosts.map(post => (
                        <div key={post.id}>
                              <h2>{post.title}</h2>
                              <p className='content'>{post.content}</p>
                        </div>
                  ))}
            </div>
      );
};

export default Blog;
