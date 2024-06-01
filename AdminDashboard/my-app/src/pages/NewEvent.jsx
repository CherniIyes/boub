import React, { useState } from 'react';
import axios from 'axios';
import './NewEvent.css';
import { FaCheck } from "react-icons/fa6";
const NewEvent = () => {
      const [formData, setFormData] = useState({
            event_title: '',
            description: '',
            image1: '',
            image2: '',
            image3: '',
            image4: '',
            date: ''
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
            axios.post('http://localhost:8081/events', formData)
                  .then(response => {
                        console.log('Event created successfully:', response.data);
                        setShowPopup(true);
                  })
                  .catch(error => {
                        console.error('There was an error creating the event!', error);
                  });
      };

      const closePopup = () => {
            setShowPopup(false);
      };

      return (
            <div className="new-form-page">
                  <h1>Create New Event</h1>
                  <form className="new-form" >
                        <div className="input-groupp">
                              <input
                                    placeholder="Title"
                                    type="text"
                                    name="event_title"
                                    autoComplete="off"
                                    className="inpute"
                                    value={formData.event_title}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Date"
                                    type="text"
                                    name="date"
                                    autoComplete="off"
                                    className="inpute"
                                    value={formData.date}
                                    onChange={handleChange}
                              />
                        </div>
                        <textarea
                              placeholder="Description"
                              className="big-input"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                        ></textarea>
                        <div className="image-inputs">
                              <input
                                    placeholder="Image 1"
                                    type="text"
                                    name="image1"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.image1}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 2"
                                    type="text"
                                    name="image2"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.image2}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 3"
                                    type="text"
                                    name="image3"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.image3}
                                    onChange={handleChange}
                              />
                              <input
                                    placeholder="Image 4"
                                    type="text"
                                    name="image4"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.image4}
                                    onChange={handleChange}
                              />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                  </form>

                  {showPopup && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h2>Event created successfully!</h2>
                                    <button onClick={closePopup}>Close</button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default NewEvent;
