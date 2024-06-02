import React, { useState } from 'react';
import axios from 'axios';
import './NewPartners.css';
import { FaCheck } from "react-icons/fa6";

const Newcoll = () => {
  const [formData, setFormData] = useState({
   
    image5: '',
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

    axios.post('http://localhost:8081/collaborators', filledData)
      .then(response => {
        console.log('coll created successfully:', response.data);
        setShowPopup(true);
      })
      .catch(error => {
        console.error('There was an error creating the coll!', error);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="new-form-page">
      <h1>Create New Collaborator</h1>
      <form className="new-form" onSubmit={handleSubmit}>
        <div className="image-inputs">
          <input
            placeholder="Image 5"
            type="text"
            name="image5"
            autoComplete="off"
            className="image-input"
            value={formData.image5}
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

export default Newcoll;
