// src/components/Layout.jsx
import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="content">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
