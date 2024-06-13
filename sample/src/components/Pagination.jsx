import React from 'react'

export default function Pagination(props) {

let numberOfPages = []
for(let i=1;i<=Math.ceil(props.filteredDishes.length/props.itemsPerPage);i++){
    numberOfPages.push(i)
}

function showNextDishesHandler(event){
    let currentPage = event.target.id
   props.setCurrentPage(currentPage)
}



let pages = numberOfPages.map((pageNumber)=>{
    return(
        <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
    )
})

  return (
    <ul className='pagination flex'>
       {pages}
    </ul>
  )
}
