// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import ProtectedRoute from './pages/ProtectedRoutes';
// import MemberTasks from './pages/MembersTask';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/members-task/:member-id" element={<MemberTasks />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
