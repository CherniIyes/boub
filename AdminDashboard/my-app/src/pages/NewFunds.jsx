import React, { useState } from 'react';
import axios from 'axios';
import './NewEvent.css';
import { FaCheck } from "react-icons/fa6";
const NewFunds = () => {
      const [formData, setFormData] = useState({
            date: '',
            pdf: '',
            image: '',
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
            axios.post('http://localhost:8081/funds/', formData)
                  .then(response => {
                        console.log('Fund Added successfully:', response.data);
                        setShowPopup(true);
                  })
                  .catch(error => {
                        console.error('There was an error creating a fund!', error);
                  });
      };

      const closePopup = () => {
            setShowPopup(false);
      };

      return (
            <div className="new-form-page">
                  <h1>Create A New Fund</h1>
                  <form className="new-form" >
                        <div className="input-groupp">
                              <input
                                    placeholder="pdf"
                                    type="text"
                                    name="pdf"
                                    autoComplete="off"
                                    className="inpute"
                                    value={formData.pdf}
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
                        {/* <textarea
                              placeholder="Description"
                              className="big-input"
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                        ></textarea> */}
                        <div className="image-inputs">
                              <input
                                    placeholder="Image"
                                    type="text"
                                    name="image"
                                    autoComplete="off"
                                    className="image-input"
                                    value={formData.image}
                                    onChange={handleChange}
                              />
                        </div>
                        <button type="submit" onClick={handleSubmit}>Submit</button>
                  </form>

                  {showPopup && (
                        <div className="popup">
                              <div className="popup-inner">
                                    <h2>New Fund was created successfully!</h2>
                                    <button className='filsa' onClick={closePopup}>Close</button>
                              </div>
                        </div>
                  )}
            </div>
      );
};

export default NewFunds;
