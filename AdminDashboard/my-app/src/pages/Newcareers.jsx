import React, { useState } from 'react';
import axios from 'axios';
import './Newcareers.css';
import { FaCheck } from "react-icons/fa";

const Newcareers = () => {
  const [formData, setFormData] = useState({
    image: '',
    pdfl: ''
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
    const filledData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value)
    );

    axios.post('http://localhost:8081/currentjob', filledData)
      .then(response => {
        console.log('Career created successfully:', response.data);
        setShowPopup(true);
      })
      .catch(error => {
        console.error('There was an error creating the career!', error);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="new-form-page">
      <h1>Create New Career</h1>
      <form className="new-form" onSubmit={handleSubmit}>
        <div className="image-inputs">
          <input
            placeholder="Image URL"
            type="text"
            name="image"
            autoComplete="off"
            className="image-input"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            placeholder="PDF URL"
            type="text"
            name="pdfl"
            autoComplete="off"
            className="image-input"
            value={formData.pdfl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>New Career created successfully!</h2>
            <button className="filsa" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newcareers;
