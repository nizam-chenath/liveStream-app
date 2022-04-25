import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-section">
        <div className="logo">Logo</div>
           <ul className="list-items">
               <li>Home</li>
               <li>Live</li>
               <li>Highlights</li>
               <li>fixtures</li>
           </ul>
    </div>
  )
}

export default Navbar