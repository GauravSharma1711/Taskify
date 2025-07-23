// src/layouts/Layout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <div className="flex-1 p-6">
        <Outlet /> {/* This is where child routes will render */}
      </div>
    </div>
  );
};

export default Layout;
