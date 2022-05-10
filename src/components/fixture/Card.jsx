import React from 'react'

const Card = ({ image, match}) => {
  return (
    <div>
           <div className="cards">
                <img src={image} alt="" className="card-img"/>
                <div className="text-block">
                    <p>{match}</p>
                </div>
            </div>
    </div>
  )
}

export default Card