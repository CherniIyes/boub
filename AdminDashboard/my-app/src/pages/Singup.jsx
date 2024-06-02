import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import log from "../assets/logo-login.png"

const Singup = ({ setIsAuthenticated }) => {
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState(null);
      const navigate = useNavigate();

      const handleCreateAcc = async (e) => {
            e.preventDefault();
            try {
                  const response = await axios.post('http://localhost:3500/admin/register', { username, email, password });
                  if (response.status === 200) {
                        setIsAuthenticated(true);
                        navigate('/');
                  }
            } catch (err) {
                  setError('Signup failed. Check your details and try again.');
            }
      };


      const handleLogInNavi = () => {
            navigate('/login');
      };


      return (
            <div className="login-wrapper">
                  <div className='tayf'>
                        <div className="login-container">
                              <form onSubmit={handleCreateAcc} className="login-form">
                                    <img src={log} alt="" className='logo-login' />
                                    <div className="form-group">
                                          <label>
                                                <span className="icon"><IoPersonSharp size="20" /></span>
                                                <input
                                                      type="text"
                                                      placeholder="Name"
                                                      style={{ fontSize: '14px' }}
                                                      value={username}
                                                      onChange={(e) => setUsername(e.target.value)}
                                                      required
                                                />
                                          </label>
                                    </div>
                                    <div className="form-group">
                                          <label>
                                                <span className="icon"><IoPersonSharp size="20" /></span>
                                                <input
                                                      type="text"
                                                      placeholder="Email"
                                                      style={{ fontSize: '14px' }}
                                                      value={email}
                                                      onChange={(e) => setEmail(e.target.value)}
                                                      required
                                                />
                                          </label>
                                    </div>
                                    <div className="form-group">
                                          <label>
                                                <span className="icon"><FaLock size="20" /></span>
                                                <input
                                                      type="password"
                                                      placeholder="Password"
                                                      style={{ fontSize: '14px' }}
                                                      value={password}
                                                      onChange={(e) => setPassword(e.target.value)}
                                                      required
                                                />
                                          </label>
                                    </div>
                                    <button className='login-button' type="submit">Sign Up</button>
                                    {error && <p className="error">{error}</p>}
                                    <div className="forgot-password">
                                          <a onClick={handleLogInNavi}>Already Have An Account? Login!</a>
                                    </div>
                              </form>
                              <div className="notice">
                                    <span>NOTICE</span>
                                    <p className='notice-text'>Please ensure the link remains private and refrain from sharing it with others.</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Singup;
