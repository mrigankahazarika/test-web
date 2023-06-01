import React , { useState } from 'react'
import './App.css'
import Login from './Login';
import HomePage from './Home';
import Profile from './profile';
import { BrowserRouter , Route, Routes  } from "react-router-dom";

function Navigationer() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/Profile" element={<Profile />} />
          </Routes>
   
      </BrowserRouter>
  )
}

export default Navigationer
