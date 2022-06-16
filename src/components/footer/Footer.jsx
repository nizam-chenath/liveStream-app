import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="footer" id="footer">
            <div className="above-section">
                <div className="sections">
                    <div className="first">
                        <h3>ABOUT</h3>
                        <p>This is a website made for watching live stream of football matches and also watch its highlights.<br/>This is also a adfree webstie to watch stream.</p>
                    </div>
                    <div className="second">
                        <h3>LEAGUES</h3>
                        <p>Premire league</p>
                        <p>Laliga </p>
                        <p>Seriea</p>
                        <p>League 1</p>
                    </div>
                    <div className="third">
                        <h3>Quick Links</h3>
                        <Link className="link" to="#">Home</Link>
                        <Link className="link" to="#">Highlights</Link>
                        <Link className="link" to="#">Live</Link>
                    </div>
                </div>
            </div>
            <div className="below-section">
                <div className="below-content">
                    <h4>© copyright 2022 livestream.com</h4>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer