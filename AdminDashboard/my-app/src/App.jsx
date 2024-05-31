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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/*" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="funds" element={<Funds />} />
          <Route path="careers" element={<Careers />} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
