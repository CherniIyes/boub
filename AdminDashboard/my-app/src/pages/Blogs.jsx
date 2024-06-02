import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Blogs.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Blogs = () => {
      const [blogs, setBlogs] = useState([]);
      const navigate = useNavigate();
      useEffect(() => {
            axios.get('http://localhost:8081/blogs/')
                  .then(response => {
                        setBlogs(response.data);
                  })
                  .catch(error => {
                        console.error('There was an error fetching the blogs!', error);
                  });
      }, []);

      const handleCreateBlog = () => {
            navigate('/newblogs');
      };

      const handleDelete = (id) => {
            axios.delete(`http://localhost:8081/blogs/${id}`)
                  .then(response => {
                        console.log('Event deleted successfully:', response.data);
                        setBlogs(blogs.filter(blog => blog.id !== id));
                  })
                  .catch(error => {
                        console.error('There was an error deleting the blog!', error);
                  });
      };

      const handleUpdate = (id) => {
            navigate(`/update-article/${id}`);
      };
      return (
            <div>
                  <button className="create-article-button" onClick={handleCreateBlog}><AiFillPlusCircle size={22} />Create A Blog</button>

                  <div className="event-page">
                        <h1>Blogs Page</h1>
                        <table>
                              <thead>
                                    <tr>
                                          <th>ID</th>
                                          <th>Title</th>
                                          <th>Content</th>
                                          <th>Author</th>
                                          <th>imageurl</th>
                                          <th>imageurl1</th>
                                          <th>imageurl2</th>
                                          <th>imageurl3</th>
                                          <th>imageurl4</th>
                                          <th>Date</th>
                                          <th>Action</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {blogs.map(blog => (
                                          <tr key={blog.event_id}>
                                                <td className='ktiba'>{blog.id}</td>
                                                <td className='ktiba'>{blog.title}</td>
                                                <td className='ktiba'>{blog.content}</td>
                                                <td className='ktiba'>{blog.author}</td>
                                                <td><img src={blog.imageurl} alt="imageurl" /></td>
                                                <td><img src={blog.imageurl1} alt="imageurl1" /></td>
                                                <td><img src={blog.imageurl2} alt="imageurl2" /></td>
                                                <td><img src={blog.imageurl3} alt="imageurl3" /></td>
                                                <td><img src={blog.imageurl4} alt="imageurl4" /></td>
                                                <td className='ktiba'>{blog.created_at}</td>
                                                <td>
                                                      <button onClick={() => handleUpdate(blog.id)}>Update</button>
                                                      <button onClick={() => handleDelete(blog.id)}>Delete</button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Blogs;
