import React from 'react'
import './Highlights.scss'
import YoutubeEmbeded from './YoutubeEmbeded'

//https://www.youtube.com/watch?v=fCsxBkCc5k0
//https://youtu.be/fCsxBkCc5k0

const Highlights = () => {
  return (
    <div className="highlight-section">
        <h2>HIGHLIGHTS</h2>
        <YoutubeEmbeded embedId= "YRbhZYmEbUM" embedID2 = "-_EVfrXqkEo" />
    </div>
  )
}

export default Highlights