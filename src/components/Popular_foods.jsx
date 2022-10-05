import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
function Popular_foods() {
    const [popular,setPopular]= useState([])
    useEffect(()=>{getPopularFoods();},[])
    const getPopularFoods = async ()=>{
            const check = localStorage.getItem('popular')
            if(check){
                setPopular(JSON.parse(check))
            }
            else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json();
            setPopular(data.recipes)
            localStorage.setItem('popular',JSON.stringify(data.recipes))
            }
        
            
        }
    
  return (
    <>  <h4>Popular Picks</h4>
    <div className='trending-list'>
  
  {popular.slice(1,4).map(recipe=>{
        return(<div key={recipe.id} className='container'>
        <div className='card'>
        <a href={'/recipe/' + recipe.id}>
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

export default Popular_foods
