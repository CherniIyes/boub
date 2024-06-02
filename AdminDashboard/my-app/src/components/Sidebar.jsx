import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import log from "../assets/logo-login.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src={log} alt="" className='logo' />
            <nav>
                <ul>
                    <li className='link'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                    <li className='link'><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                    <li className='link'><NavLink to="/events" activeClassName="active">Events</NavLink></li>
                    <li className='link'><NavLink to="/funds" activeClassName="active">Funds</NavLink></li>
                    <li className='link'><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
                    <li className='link'><NavLink to="/partners" activeClassName="active">Partners</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
