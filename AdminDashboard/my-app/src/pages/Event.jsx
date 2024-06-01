import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Event.css';

const Event = () => {
      const [events, setEvents] = useState([]);

      useEffect(() => {
            axios.get('http://localhost:8081/events/get')
                  .then(response => {
                        setEvents(response.data);
                  })
                  .catch(error => {
                        console.error('There was an error fetching the events!', error);
                  });
      }, []);

      return (
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
                              {events.map(event => (
                                    <tr key={event.event_id}>
                                          <td>{event.event_id}</td>
                                          <td>{event.event_title}</td>
                                          <td>{event.description}</td>
                                          <td><img src={event.image1} alt="Event Image 1" /></td>
                                          <td><img src={event.image2} alt="Event Image 2" /></td>
                                          <td><img src={event.image3} alt="Event Image 3" /></td>
                                          <td>{event.date}</td>
                                    </tr>
                              ))}
                        </tbody>
                  </table>
            </div>
      );
};

export default Event;
