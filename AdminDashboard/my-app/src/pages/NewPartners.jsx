import React, { useState } from 'react';
import axios from 'axios';
import './NewPartners.css';
import { FaCheck } from "react-icons/fa6";

const NewPartners = () => {
  const [formData, setFormData] = useState({
    image1: '',
    image2: '',
    image3: '',
    image4: '',
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

    axios.post('http://localhost:8081/partners', filledData)
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
      <h1>Create New Partner</h1>
      <form className="new-form" onSubmit={handleSubmit}>
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
        
        
        </div>
        <button type="submit">Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2> NewPartner created successfully!</h2>
            <button className='filsa' onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPartners;
