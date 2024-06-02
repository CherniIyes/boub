// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Funds from './pages/Funds';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Login from './pages/Login';
import Events from './pages/Event';
import NewEvent from './pages/NewEvent';
import NewFunds from './pages/NewFunds';
import Singup from './pages/Singup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/singup" element={<Singup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/*" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="funds" element={<Funds />} />
          <Route path="careers" element={<Careers />} />
          <Route path="partners" element={<Partners />} />
          <Route path="create-article" element={<NewEvent />} /> 
          <Route path="createFunds" element={<NewFunds />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
