import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Searched() {
    const [searchedRecipes,setSearchedRecipes] = useState([])
    let params = useParams()
    const getSearched = async(name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }
    useEffect(()=>{
        getSearched(params.search)
        console.log(searchedRecipes)

    },[params.search])
  return (
    <>
    <h1>{params.type}</h1>
    <div className='cuisine-container'>
      {searchedRecipes.map((item)=>{
        return(
            <div className='container' key={item.id}>
                <div className='card'>
                        <a  href={'/recipe/' + item.id} >
                        <img src={item.image} alt={item.title} srcSet="" />
                    <p>{item.title}</p></a>


                </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Searched
