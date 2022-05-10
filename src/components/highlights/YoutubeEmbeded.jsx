import React from 'react'
import PropTypes from "prop-types";

const YoutubeEmbeded = ({embedId, embedID2}) => {
  return (
    <div className="video-section">
     

      
      <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedID2}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
     

    </div>
  )
};


YoutubeEmbeded.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeEmbeded