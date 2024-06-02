import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Funds.css';
import { AiFillPlusCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Careers = () => {
  const [data, setFunds] = useState([]);
  const [data1, setFunds1] = useState([]);
  const [updateData, setUpdateData] = useState({
    id: null,
    image: '',
    pdfl: ''
  });
  const [updateData1, setUpdateData1] = useState({
    id: null,
    image: '',
    pdf: ''
  });
  const [showUpdateInputs, setShowUpdateInputs] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/currentjob/get')
      .then(response => {
        setFunds(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8081/internship/get')
      .then(response => {
        setFunds1(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);
  const handleCreateFund = () => {
    navigate('/create-carees');
  };

  const handleUpdatePartners = (id, image, pdfl) => {
    setUpdateData({
      id: id,
      image: image,
      pdfl: pdfl
    });
    setShowUpdateInputs(true);
  };
  const handleUpdatePartners1 = (id, image, pdfl) => {
    setUpdateData1({
      id: id,
      image: image,
      pdf: pdfl
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
  const handleInputChange1 = (event) => {
    const { name, value } = event.target;
    setUpdateData1(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmitUpdate = () => {
    axios.put(`http://localhost:8081/currentjob/${updateData.id}`, updateData)
      .then(() => {
        const updatedFunds = data.map(fund => {
          if (fund.id === updateData.id) {
            return { ...fund, ...updateData };
          }
          return fund;
        });
        setFunds(updatedFunds);
        setShowUpdateInputs(false);
      })
      .catch(error => {
        console.error('There was an error updating the job!', error);
      });
  };
  const handleSubmitUpdate1 = () => {
    axios.put(`http://localhost:8081/internship/${updateData1.id}`, updateData1)
      .then(() => {
        const updatedFunds = data1.map(fund => {
          if (fund.id === updateData1.id) {
            return { ...fund, ...updateData1 };
          }
          return fund;
        });
        setFunds(updatedFunds);
        setShowUpdateInputs(false);
      })
      .catch(error => {
        console.error('There was an error updating the job!', error);
      });
  };

  const handleDeletePartners = (id) => {
    axios.delete(`http://localhost:8081/currentjob/${id}`)
      .then(() => {
        setFunds(data.filter(fund => fund.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the job!', error);
      });
  };
  const handleDeletePartners1 = (id) => {
    axios.delete(`http://localhost:8081/internship/${id}`)
      .then(() => {
        setFunds(data1.filter(fund => fund.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the job!', error);
      });
  };

  return (
    <div className="funds-container">
      <h2>Careers Page</h2>
 
      <div className="funds-list">
        {data.map((fund, index) => (
          <div key={index} className="fund-item">
            <div className="icon-container">
              <AiFillEdit size={20} className="edit-icon" onClick={() => handleUpdatePartners(fund.id, fund.image, fund.pdfl)} />
              <AiFillDelete size={20} className="delete-icon" onClick={() => handleDeletePartners(fund.id)} />
            </div>
            <div className="text-container">
              
              {showUpdateInputs && updateData.id === fund.id && (
                <div className="update-inputs">
                  <input
                    type="text"
                    name="image"
                    value={updateData.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                  />
                  <input
                    type="text"
                    name="pdfl"
                    value={updateData.pdfl}
                    onChange={handleInputChange}
                    placeholder="PDF URL"
                  />
                  <button onClick={handleSubmitUpdate}>Update</button>
                </div>
              )}
            </div>
            <img src={fund.image} alt={`Fund ${index}`} />
          </div>
        ))}
        <div className="fund-item plus-item" onClick={handleCreateFund}>
          <AiFillPlusCircle size={50} />
        </div>
      </div>



      
    </div>
  );
};

export default Careers;
