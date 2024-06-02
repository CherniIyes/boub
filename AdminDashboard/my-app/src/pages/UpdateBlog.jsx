import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewEvent.css';
import { FaCheck } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEvent = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
            title: '',
            content: '',
            author: '',
            imageurl: '',
            imageurl1: '',
            imageurl2: '',
            imageurl3: '',
            imageurl4: '',
      });
      const [showPopup, setShowPopup] = useState(false);

      useEffect(() => {
            if (id) {
                  axios.get(`http://localhost:8081/blogs/${id}`)
                        .then(response => {
                              setFormData(response.data);
                        })
                        .catch(error => {
                              console.error('There was an error fetching the blog!', error);
                        });
            }
      }, [id]);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            if (id) {
                  axios.put(`http://localhost:8081/blogs/${id}`, formData)
                        .then(response => {
                              console.log('Blog updated successfully:', response.data);
                              setShowPopup(true);
                        })
                        .catch(error => {
                              console.error('There was an error updating the blog!', error);
                        });
            }
      };

      const closePopup = () => {
            setShowPopup(false);
      };

      return (
            <div className="new-form-page">
                  <h1>Update Blog</h1>
                  <form className="new-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                              <input
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    autoComplete="off"
                                    className="input"
                                    value={formData.title}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Author"
                                    type="text"
                                    name="author"
                                    autoComplete="off"
                                    className="input"
                                    value={formData.author}
                                    onChange={handleChange}
                              />
                        </div>
                        <textarea
                              placeholder="Content"
                              className="big-input"
                              name="content"
                              value={formData.content}
                              onChange={handleChange}
                        ></textarea>
                        <div className="image-inputs">
                              <input
                                    placeholder="Image 1"
                                    type="text"
                                    name="imageurl"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 2"
                                    type="text"
                                    name="imageurl1"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl1}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 3"
                                    type="text"
                                    name="imageurl2"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl2}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 4"
                                    type="text"
                                    name="imageurl3"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl3}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 5"
                                    type="text"
                                    name="imageurl4"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl4}
                                    onChange={handleChange}
                              />
                        </div>
                        <button type="submit">{id ? 'Update' : 'Submit'}</button>
                  </form>

                  {showPopup && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h2>Blog {id ? 'updated' : 'created'} successfully!</h2>
                                    <button className='close-btn' onClick={closePopup}>Close</button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default UpdateEvent;
