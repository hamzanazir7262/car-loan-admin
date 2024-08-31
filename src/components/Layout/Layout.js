import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'; // Adjust the import path if necessary

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;