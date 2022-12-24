import { useState } from "react";
import axios from 'axios';
import Meal from "./mealItem.jsx";
import "./mystyle.css"

const Home = () => {
 
  const[query, setQuery]=useState('') 
  const [meal,setMeal]=useState([])


    const getRecipe=async()=>{
    const result=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    )
    setMeal (result.data.meals)
    console.log(result.data.meals)
  
  }  
  const handleSubmit=(e)=>{
    e.preventDefault();
    getRecipe();  
  }


  return (
    <div className="main">
      <div className="heading">
      <h1 onClick={getRecipe}>Search Your Food Recipe </h1>
      <h4>Welcome To The Amazing Food Recipe website, can't cook? dont worry we've got your back..there are also video tutorials for you,just click the picture and scroll down...you are welcome😍</h4>
      
      </div>
  <div className="search-box">
  <form onSubmit={handleSubmit}>
    
    <input
    className="search-bar"
    type="text"
     placeholder="Enter Food key Word"
      value={query}
       onChange={(e)=>{
        setQuery(e.target.value)
        
     
       
      }}
      
      />
    <button type="submit">Search</button>
  </form>
      </div>
 
 <div className="container">
 {
     (meal==null)? <p className="notSearch">Not Found</p>
     :
   meal.map((data)=>{
     return(<div key={data.mealStr}>
    
      <Meal data={data} />
       </div>
    
  
     
      
  
   )})
   }
 </div>
  
 
    </div>
  )
  
}

export default Home