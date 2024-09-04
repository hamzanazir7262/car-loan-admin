import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'; // Adjust the import path if necessary
import Navbar from '../Navbar'; 

const Layout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', }}>
      <div style={{ flexShrink: 0 }}><Sidebar /></div>
      
      <main style={{ flexGrow: 1, backgroundColor: 'lightgrey', overflowY: 'auto' }}>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
