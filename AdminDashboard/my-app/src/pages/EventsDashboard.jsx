import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EventsDashboard.css';
import { AiFillPlusCircle } from "react-icons/ai";
const Event = () => {
      const [events, setEvents] = useState([]);
      const navigate = useNavigate();
      useEffect(() => {
            axios.get('http://localhost:8081/events/get')
                  .then(response => {
                        setEvents(response.data);
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
                  <button className="create-article-button" onClick={handleCreateArticle}>
                        <AiFillPlusCircle size={22} />Create Article
                  </button>
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
                                          <th>Image4</th>
                                          <th>Date</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {events.map(event => (
                                          <tr key={event.event_id}>
                                                <td className='ktiba'>{event.event_id}</td>
                                                <td className='ktiba'>{event.event_title}</td>
                                                <td className='ktiba'>{event.description}</td>
                                                <td><img src={event.image1} alt="Event Image 1" /></td>
                                                <td><img src={event.image2} alt="Event Image 2" /></td>
                                                <td><img src={event.image3} alt="Event Image 3" /></td>
                                                <td><img src={event.image4} alt="Event Image 4" /></td>
                                                <td className='ktiba'>{event.date}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Event;