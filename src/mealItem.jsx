import React from 'react';
import './mystyle.css'

const Meal = ({data}) => {
  return (
      <>
<div className='card' >
  <img src={`${data.strMealThumb}`} alt={`${data?.strMeal}`}/>
    <div className="info">
       <h3>{data.strMeal}</h3>
       <p>{data.strCategory}</p>
  </div>
  <div className="recipe">
  <p>{data.strInstructions}</p>
  <img src={`${data.strMealThumb}`} alt={`${data?.strMeal}`}/>
  <a href={`${data.strYoutube}`}>Watch Video Tutorial</a>
  </div>
 
   </div>
    
   </>
   )
  
}

export default Meal