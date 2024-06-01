// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Funds from './pages/Funds';
import Careers from './pages/Careers';
import Partners from './pages/Partners';
import Login from './pages/Login';
import Events from './pages/Event';
import EventsDashboard from './pages/EventsDashboard';
import NewEvent from './pages/NewEvent';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/*" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="eventsDashboard" element={<EventsDashboard />} />
          <Route path="funds" element={<Funds />} />
          <Route path="careers" element={<Careers />} />
          <Route path="partners" element={<Partners />} />
          <Route path="create-article" element={<NewEvent />} />  // Add the route for the new form
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
