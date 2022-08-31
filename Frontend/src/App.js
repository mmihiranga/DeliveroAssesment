import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/SignUp';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route >
          <Route path="/" index element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
