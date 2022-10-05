import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Vegan_foods() {
const [vegan,setVegan]= useState([])
    useEffect(()=>{getPopularFoods();},[])
    const getPopularFoods = async ()=>{
            const check = localStorage.getItem('vegan')
            if(check){
                setVegan(JSON.parse(check))
            }
            else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json();
            setVegan(data.recipes)
            localStorage.setItem('vegan',JSON.stringify(data.recipes))
            }
        
            
        }
    
  return (
    <>  <h4>Vegetarian Picks</h4>
    <div className='trending-list'>
  
  {vegan.slice(1,5).map(recipe=>{
        return(<div key={recipe.id} className='container'>
        <div className='card'>
        <a  href={'/recipe/' + recipe.id} >
        <img src={recipe.image} alt={recipe.title} srcSet="" />
        <p>{recipe.title}</p>
        </a>
        </div>

        </div>)
      })}
    </div>
    
    </>
  )
}

export default Vegan_foods
