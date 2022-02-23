import React from 'react';
import Profile from "../Home/Profile";
import Footer from "../Home/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className='home-container'>
    <Profile/>
    <Footer/>
    </div>
    )
}
