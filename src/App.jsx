import { useState } from 'react'
import './App.css'
import Login from './Login';
import { BrowserRouter , Route, Routes , useParams } from "react-router-dom";
import Navigationer from './navigation';


function App() {

  return (
      <Navigationer />
  )
}

export default App
