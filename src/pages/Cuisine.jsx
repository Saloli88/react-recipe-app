import React from 'react'
import {motion} from 'framer-motion'
import {useParams,Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Cuisine() {
    const [cuisine,setCuisine] = useState([])
    let params = useParams();
    const getCuisine = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)
    }
    useEffect(()=>{
        getCuisine(params.type)
    },[params.type])
  return (
    <>
    <h1>{params.type}</h1>
    <div className='cuisine-container'>
      {cuisine.map((item)=>{
        return(
            <div className='container' key={item.id}>

                             <div className='card'>
                                                 <a  href={'/recipe/' + item.id} >
                           <img src={item.image} alt={item.title} srcSet="" />
        <p>{item.title}</p>
           </a>
                </div>
                 
           
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Cuisine
