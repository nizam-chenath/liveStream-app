import React from 'react'
import "./Fixture.scss"
import Card from './Card'
// import data from "../../data/data.json"
import gsap from 'gsap';
import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios'
import Pagination from './Pagination';

gsap.registerPlugin(ScrollTrigger);

const Fixture = () => {

  const [datas, setDatas] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [nomberItems] = useState(12);

 let headingRef = useRef(null);
 let cardRef = useRef(null);

   useEffect(()=>{
     axios({
       method: "GET",
       url: `https://www.scorebat.com/video-api/v3/feed/?token=MTk0ODRfMTY1MjYwMDkzMl8wYjM5ZDJhZTkwMzY2MjY1MzQ0Yzc2NGIzYWFlYjQ5MTc3ZTQyYjBk`,
     }).then(res => {
       console.log(res.data);
       setDatas(res.data.response)
     }).catch(err=> console.log(err))
   },[]);

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

    const indexofLastPost = currentPage * nomberItems;
    const indexofFirstPost = indexofLastPost - nomberItems;
    const currentItems = datas.slice(indexofFirstPost, indexofLastPost)
     
    //function that call when pagination nomber clicked
    // const gotopage = num => setCurrentPage(num)
  const gotopage = number =>  setCurrentPage(number);
    
  return (
    <div id="highlights">

    <div className="fixture-section" >
      
       <h3 ref={el => {headingRef = el}}>Todays Fixture</h3>
       
       <div className="card-section" ref={el => {cardRef = el}}>
           {
               currentItems.map((items) =>(
                   <Card image={items.thumbnail} match={items.title} url={items.matchviewUrl}/>
               ))
           }
       </div>
       <Pagination nomberofitems={nomberItems} totalitems={datas.length} gotopage={gotopage} currentPage={currentPage}/>
    </div>
    </div>
  )
}

export default Fixture