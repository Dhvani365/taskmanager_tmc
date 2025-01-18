// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Members from './components/Members';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="members/:projectId" element={<Members/>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
