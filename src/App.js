import React from "react";
import './App.css';
import axios from 'axios';
import Chart from 'chart.js/auto';

import {
  BrowserRouter as Router,
   Routes,
  Route

} from "react-router-dom";

import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <Router>
    <Menu/>
    <Hero/>
    <div className="mainContainer">
    <Routes>
    <Route path="/about" element={<AboutPage />} />,
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
      
      </Routes>     
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
