import React from 'react';
import './Home.scss';
import cr7 from "../../images/homeimg.gif";
import youtube from "../../images/youtube.png"
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  let imgRef = useRef(null);
  let headingRef = useRef(null);
  let btnRef = useRef(null);

  useEffect(()=>{
      
         gsap.fromTo(imgRef, {opacity: 0}, {opacity: 1, duration: 5, scrollTrigger:{
           trigger: imgRef
         }})
         gsap.fromTo(imgRef, {opacity: 1}, {opacity: 0,  scrollTrigger:{
          trigger: ".home-section",
          start: "0%",
          end: "60%",
          scrub: true,
        }}) 
        gsap.fromTo(btnRef, {opacity: 1}, {opacity: 0,  scrollTrigger:{
          trigger: ".home-section",
          start: "0%",
          end: "60%",
          scrub: true,
        }}) 
        gsap.fromTo(headingRef, {opacity: 1}, {opacity: 0,  scrollTrigger:{
          trigger: ".home-section",
          start: "0%",
          end: "30%",
          scrub: true,
        }})
         gsap.fromTo(headingRef,{opacity: 0 },{opacity: 1, duration: 7, ScrollTrigger:{
            trigger: headingRef
         }})
  },[])
  return (
   

    <div className="home-section" id="home">
      
       <div className="pictureSection">
           <img src={cr7} alt="" ref={el => {imgRef = el}}/>
       </div>
       <div className="buttonSection">
            <h2 ref={el =>{headingRef = el}}>LIVE STREAMING</h2>
            
            <button onClick={()=> window.open("https://www.hotstar.com/in/sports/football")}  ref={el=>{btnRef = el}}> <img src={youtube} alt="" />  PLAY</button>
            
       </div>
    </div>
  )
}

export default Home
