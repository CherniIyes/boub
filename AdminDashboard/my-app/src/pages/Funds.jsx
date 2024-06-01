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
    navigate('/create-article');  // Navigate to the new form page
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
              <th>Title</th>
              <th>Description</th>
              <th>Image1</th>
              <th>Image2</th>
              <th>Image3</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {funds.map(event => (
              <tr key={event.event_id}>
                <td className='ktiba'>{event.event_id}</td>
                <td className='ktiba'>{event.event_title}</td>
                <td className='ktiba'>{event.description}</td>
                <td><img src={event.image1} alt="Event Image 1" /></td>
                <td><img src={event.image2} alt="Event Image 2" /></td>
                <td><img src={event.image3} alt="Event Image 3" /></td>
                <td className='ktiba'>{event.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Funds;
