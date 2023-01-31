import React from 'react'
import "./pagination.css";

const Pagination = ({ totalPosts, list, currPage, handlePageClick }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / list); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <button key={index} onClick={() => handlePageClick} className={page === currPage ? "active" : ""}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination
