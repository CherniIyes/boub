import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Funds.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Funds = () => {
  const [funds, setFunds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/funds')
      .then(response => {
        setFunds(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleCreateFund = () => {
    navigate('/createFunds');  
  };

  const handleDeleteFund = (id) => {
    axios.delete(`http://localhost:8081/funds/${id}`)
      .then(() => {
        setFunds(funds.filter(fund => fund.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the fund!', error);
      });
  };

  return (
    <div className="funds-container">
            <h1>Funds Page</h1>
      <div className="funds-list">
        {funds.map((fund, index) => (
          <div key={index} className="fund-item">
            <img src={fund.image} alt={`Fund ${index}`} />
            <div className="delete-icon" onClick={() => handleDeleteFund(fund.id)}>
              <AiOutlineClose size={20} />
            </div>
          </div>
        ))}
        <div className="fund-item plus-item" onClick={handleCreateFund}>
          <AiFillPlusCircle size={50} />
        </div>
      </div>
    </div>
  );
};

export default Funds;
