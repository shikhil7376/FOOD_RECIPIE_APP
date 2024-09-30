import React from 'react';

export default function CardDish(props) {
  const handleClick = (event) => {
    event.preventDefault(); // Prevents the default behavior of anchor tag
    const{strMeal} = props.menuItem
    props.showPopup(strMeal);
  };

  return (
    <li>
      <a href='#' onClick={handleClick}>
        <img src={props.menuItem.strMealThumb} className='br border-2 border-gray-400' alt='Meal Thumbnail'/>
        <h4 className='text-gray-400'>{props.menuItem.strMeal}</h4>
        <button></button>
      </a>
    </li>
  );
}
