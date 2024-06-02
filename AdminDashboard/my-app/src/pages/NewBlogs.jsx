import React, { useState } from 'react';
import axios from 'axios';
import './NewEvent.css';
import { FaCheck } from "react-icons/fa6";
const NewEvent = () => {
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

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                  ...formData,
                  [name]: value
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            axios.post('http://localhost:8081/blogs/post', formData)
                  .then(response => {
                        console.log('blog created successfully:', response.data);
                        setShowPopup(true);
                  })
                  .catch(error => {
                        console.error('There was an error creating the blog!', error);
                  });
      };

      const closePopup = () => {
            setShowPopup(false);
      };

      return (
            <div className="new-form-page">
                  <h1>Create New Blog</h1>
                  <form className="new-form" >
                        <div className="input-groupp">
                              <input
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    autoComplete="off"
                                    className="inpute"
                                    value={formData.title}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Author"
                                    type="text"
                                    name="author"
                                    autoComplete="off"
                                    className="inpute"
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
                              />      <input
                                    placeholder="Image 5"
                                    type="text"
                                    name="imageurl4"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.imageurl4}
                                    onChange={handleChange}
                              />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                  </form>

                  {showPopup && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h2>Blog created successfully!</h2>
                                    <button className='filsa' onClick={closePopup}>Close</button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default NewEvent;
