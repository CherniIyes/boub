import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Funds.css';
import { AiFillPlusCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const Funds = () => {
  const [funds, setFunds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:8081/events/get')
      .then(response => {
        setFunds(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the events!', error);
      });
  }, []);

  const handleCreateArticle = () => {
    navigate('/create-fudns');
  };

  return (
    <div>
      <button className="create-article-button" onClick={handleCreateArticle}><AiFillPlusCircle size={22} />Create Article</button>

      <div className="event-page">
        <h1>Event Page</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Pdf</th>
              <th>Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {funds.map(fund => (
              <tr key={fund.event_id}>
                <td className='ktiba'>{fund.id}</td>
                <td className='ktiba'>{fund.pdf}</td>
                <td className='ktiba'>{fund.date}</td>
                <td><img src={fund.image} alt="Event Image 1" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funds;

















.event-page {
  /* max-width: 1200px; */
  padding: 20px;
  margin-top: 40px;

}

.event-page h1 {
  margin-bottom: 20px;
}

.create-article-button {
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  /* margin-bottom: 20px; */
  padding: 10px 20px;
  background-color: white;
  color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 200px;
  font-weight: bold;
  float: inline-end;
}

.create-article-button:hover {
  background-color: #1a752e;
}

.event-page table {
  width: 100%;
  border-collapse: collapse;
  /* margin-bottom: 20px; */
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
}

.event-page table th,
.event-page table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #afadad;
  border-right: 1px solid #afadad;
  background-color: #333;
  color: #fff;
}

.event-page table th {
  background-color: #555;
  font-weight: bold;
}

.event-page table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.event-page img {
  max-width: 200px;

  /* object-fit: contain; */
  display: block;
  margin: 0 auto;
}

.event-page th,
td {
  text-align: center;
}

.event-page table th:first-child,
.event-page table td:first-child {
  text-align: left;
}

.event-page table th:last-child,
.event-page table td:last-child {
  text-align: right;
}