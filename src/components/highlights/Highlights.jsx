import React from 'react' 

import './Highlights.scss'
import YoutubeEmbeded from './YoutubeEmbeded'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//https://www.youtube.com/watch?v=fCsxBkCc5k0
//https://youtu.be/fCsxBkCc5k0

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
 var headingRef = useRef(null);
 var youRef = useRef(null);
 
  useEffect(()=>{
      gsap.fromTo(headingRef,{ opacity: 0, marginLeft : "0px"}, {opacity : 1, marginLeft: "200px", scrollTrigger:{
        trigger: ".highlight-section",
        start: "-50%",
        end: "10%",
        scrub: true,
      }})
        gsap.fromTo(youRef,{ opacity: 0 }, {opacity : 1, duration: 2,  scrollTrigger:{
        trigger: ".highlight-section",
        start: "-70%",
        end: "100%",
        scrub: true,
      }})
  },[])

  return (
    <div className="highlight-section" id="fixture" >
        <h2 ref={el => {headingRef = el}}>HIGHLIGHTS</h2>
        <div ref={el => {youRef=el}}>

        <YoutubeEmbeded embedId= "YRbhZYmEbUM" embedID2 = "-_EVfrXqkEo" />
        </div>
    </div>
  )
}

export default Highlights