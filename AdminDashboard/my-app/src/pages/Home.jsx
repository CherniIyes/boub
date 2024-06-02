import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Home.css";

const Home = () => {
      const [userCount, setUserCount] = useState(0);
      const [eventCount, setEventCount] = useState(0);

      useEffect(() => {
            const fetchUserCount = async () => {
                  try {
                        const response = await axios.get('http://localhost:3500/admin/count');
                        setUserCount(response.data);
                  } catch (error) {
                        console.error('Error fetching user count:', error);
                  }
            };
               const fetchEventCount = async () => {
                  try {
                        const response = await axios.get('http://localhost:8081/events/count');
                        setEventCount(response.data);
                  } catch (error) {
                        console.error('Error fetching user count:', error);
                  }
            };

            fetchUserCount();
            fetchEventCount();
      }, []);

      return (
            <div>
                  <h1>Home Page</h1>
                  <div className="grid-container">
                        <div className="card">
                              <div className="card-content">
                                    <h2>PDFs</h2>
                                    <p>18</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Projects</h2>
                                    <p>10</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Volunteers</h2>
                                    <p>11</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Events</h2>
                                    <p>{eventCount}</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Participants</h2>
                                    <p>15</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Other Articles</h2>
                                    <p>21</p>
                              </div>
                        </div>
                        <div className="card">
                              <div className="card-content">
                                    <h2>Current Users</h2>
                                    <p>{userCount}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Home;
