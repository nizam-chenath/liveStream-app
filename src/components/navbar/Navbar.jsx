import React from 'react'
import './Navbar.scss'
import {HashLink as Link} from 'react-router-hash-link'
import { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimesCircle} from 'react-icons/fa'



const Navbar = () => {
   const [mobile, setMobile] = useState(false);
  return (
  <>
 
    <div className="navbar-section">
        <div className="logo">Logo</div>
        <ul className={mobile ? "mobile-list" : "list-items"}>
              <Link to="#home" smooth><li>Home</li></Link> 
              
              <Link to="#highlights" smooth><li>Highlights</li></Link> 
              <Link to="#fixture" smooth><li>fixtures</li></Link> 
        </ul> 

        <button onClick={() => setMobile(!mobile)} className="menu-icon" >
          {mobile ? <FaTimesCircle/>:  <FaBars/> }
        </button>
    </div>
  </>)
}

export default Navbar