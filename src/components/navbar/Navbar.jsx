import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'
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
              <Link to=""><li>Home</li></Link> 
              <Link to=""><li>Live</li></Link> 
              <Link to=""><li>Highlights</li></Link> 
              <Link to=""><li>fixtures</li></Link> 
        </ul> 

        <button onClick={() => setMobile(!mobile)} className="menu-icon" >
          {mobile ? <FaTimesCircle/>:  <FaBars/> }
        </button>
    </div>
  </>)
}

export default Navbar