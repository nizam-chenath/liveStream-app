import React from 'react'

const Card = ({ image, match, url}) => {
  return (
    <div>
           <div className="cards" >
                <img src={image} alt="" className="card-img" onClick={()=> window.open(url)}/>
                <div className="text-block">
                    <p>{match}</p>
                </div>
            </div>
    </div>
  )
}

export default Card