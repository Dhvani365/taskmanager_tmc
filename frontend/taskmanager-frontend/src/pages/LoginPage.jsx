// src/pages/LoginPage.jsx
import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
