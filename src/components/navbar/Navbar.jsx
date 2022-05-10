import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar-section">
        <div className="logo">Logo</div>
        <div className="list-items">
               <li>Home</li>
               <li>Live</li>
               <li>Highlights</li>
               <li>fixtures</li>
        </div>
    </div>
  )
}

export default Navbar