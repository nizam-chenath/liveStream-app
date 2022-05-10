import React from 'react'
import "./Fixture.scss"
import Card from './Card'
import data from "../../data/data.json"
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Fixture = () => {
 let headingRef = useRef(null);
 let cardRef = useRef(null);

  useEffect(()=>{
    gsap.fromTo(headingRef, {opacity: 0, x: -20}, {opacity: 1, x: 0, scrollTrigger:{
      trigger: headingRef,
      start: "-50%",
      end: "50%",
      scrub: true,
    }})
    gsap.fromTo(cardRef, {opacity: 0}, {opacity: 1, scrollTrigger:{
      trigger: ".fixture-section",
      start: "-10%",
      end: "50%",
      scrub: true,
    }})
  },[])

  return (
    <div >

    <div className="fixture-section" >
      
       <h3 ref={el => {headingRef = el}}>Todays Fixture</h3>
       
       <div className="card-section" ref={el => {cardRef = el}}>
           {
               data.map((items) =>(
                   <Card image={items.img} match={items.match} />
               ))
           }
       
            
           
       </div>
    </div>
    </div>
  )
}

export default Fixture