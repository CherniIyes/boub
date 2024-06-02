import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Partners.css';
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Partners = () => {
  const [funds, setFunds] = useState([]);
  const [funds1, setFunds1] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: null,
    image1: '',
    // Add other image fields here
  });
  const [showUpdateInputs, setShowUpdateInputs] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/partners/')
      .then(response => {
        setFunds(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8081/collaborators/')
      .then(response => {
        setFunds1(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleDeletePartners = (part_id) => {
    axios.delete(`http://localhost:8081/partners/${part_id}`)
      .then(() => {
        setFunds(funds.filter(fund => fund.part_id !== part_id));
      })
      .catch(error => {
        console.error('There was an error deleting the partners!', error);
      });
  };

  const handleUpdatePartners = (part_id, image1) => {
    setUpdateData({
      id: part_id,
      image1: image1,
      // Add other image fields here
    });
    setShowUpdateInputs(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmitUpdate = () => {
    axios.put(`http://localhost:8081/partners/${updateData.id}`, updateData)
      .then(() => {
        // Update funds state
        const updatedFunds = funds.map(fund => {
          if (fund.part_id === updateData.id) {
            return { ...fund, ...updateData };
          }
          return fund;
        });
        setFunds(updatedFunds);
        setShowUpdateInputs(false); // Hide update inputs after successful update
      })
      .catch(error => {
        console.error('There was an error updating the partners!', error);
      });
  };

  const handleCreateFund = () => {
    navigate('/create-part');
  };

  return (
    <div className="funds-container">
      <h1>Partners Page</h1>
      <h3>Current Collaborators</h3>
      <div className="funds-list">
        {funds.map((fund, index) => (
          <div className="fund-item" key={index}>
            <AiFillDelete size={20} className="delete-icon" onClick={() => handleDeletePartners(fund.part_id)} />
            <AiFillEdit size={20} className="edit-icon" onClick={() => handleUpdatePartners(fund.part_id, fund.image1)} />
            {showUpdateInputs && updateData.id === fund.part_id && (
              <div>
                <input type="text" name="image1" value={updateData.image1} onChange={handleInputChange} />
                {/* Add other input fields for other images */}
                <button onClick={handleSubmitUpdate}>Update</button>
              </div>
            )}
            {fund.image1 && <img src={fund.image1} alt={`Fund ${index}`} />}
            {fund.image2 && <img src={fund.image2} alt={`Fund ${index}`} />}
            {fund.image3 && <img src={fund.image3} alt={`Fund ${index}`} />}
            {fund.image4 && <img src={fund.image4} alt={`Fund ${index}`} />}
          </div>
        ))}
        <div className="fund-item plus-item" onClick={handleCreateFund}>
          <AiFillPlusCircle size={50} />
        </div>
      </div>
      <h3>Previous Collaborators</h3>
      <div className="funds-list">
        {funds1.map((fund, index) => (
          <div className="fund-item" key={index}>
            <AiFillDelete size={20} className="delete-icon" onClick={() => handleDeletePartners(fund.part_id)} />
            <AiFillEdit size={20} className="edit-icon" onClick={() => handleUpdatePartners(fund.part_id, fund.image1)} />
            {showUpdateInputs && updateData.id === fund.part_id && (
              <div>
                <input type="text" name="image1" value={updateData.image1} onChange={handleInputChange} />
                {/* Add other input fields for other images */}
                <button onClick={handleSubmitUpdate}>Update</button>
              </div>
            )}
            {fund.image5 && <img src={fund.image5} alt={`Fund ${index}`} />}
            {fund.image6 && <img src={fund.image6} alt={`Fund ${index}`} />}
            {fund.image7 && <img src={fund.image7} alt={`Fund ${index}`} />}
            {fund.image8 && <img src={fund.image8} alt={`Fund ${index}`} />}
          </div>
        ))}
        <div className="fund-item plus-item" onClick={handleCreateFund}>
          <AiFillPlusCircle size={50} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
