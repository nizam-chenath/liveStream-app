import React from 'react';


const Card = ({ image, match, url}) => {
  return (
    <div>
           <div className="cards" >
                <img src={image} onError={({currentTarget})=>{
                  currentTarget.onerror = null;
                  currentTarget.src="https://imgs.search.brave.com/bdsCVzC64VgDaY0seHDrQjx6pdcWoMteWRmFzzGVwhY/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/d29SLTVzSGpnaGhR/c0ZBaUZ5RXJBSGFF/OCZwaWQ9QXBp";
                }} alt="" className="card-img" onClick={()=> window.open(url)}/>
                <div className="text-block">
                    <p>{match}</p>
                </div>
            </div>
    </div>
  )
}

export default Card