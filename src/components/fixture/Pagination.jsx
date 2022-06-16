import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({nomberofitems, totalitems, gotopage, currentPage }) => {
    const pageNumbers = [];

    for( let i=1; i<= Math.ceil(totalitems / nomberofitems); i++){
        pageNumbers.push(i);
    }
  return (
    <div className="pagination">
        <div className="ul">

       
            {pageNumbers.map((number)=>(

            <li onClick={() => gotopage(number)} className={currentPage === number ? "active-li" : "li"} key={number}>
                <Link className= "a" to={"/"}>{number}</Link>
            </li>
  ))}
     
        </div>
    </div>
  )
}

export default Pagination