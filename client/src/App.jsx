import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  return (
    <div className='app'>
      <ToastContainer />
      <Navbar /> 
      <Routes>
        <Route path="/" element= {<HomePage />} />
        <Route path="/create" element= {<CreatePage />} />
      </Routes>
    </div>
  )
}

export default App
