import React from 'react';
import './Home.css';
import cr7 from "../../images/cr7.png";
import youtube from "../../images/youtube.png"

const Home = () => {
  return (
    <div className="home-section">
       <div className="pictureSection">
           <img src={cr7} alt="" />
       </div>
       <div className="buttonSection">
            <h2>LIVE STREAMING</h2>
            <button> <img src={youtube} alt="" />  PLAY</button>
       </div>
    </div>
  )
}

export default Home
