import { useParams } from "react-router-dom";
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";

function Recipe() {
    let params = useParams()
    const [recipe,setRecipes] = useState({})
    const fetchRecipe = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        const RecipeData = await data.json()
        setRecipes(RecipeData)    
    }
    useEffect(()=>{
        fetchRecipe()
        console.log(recipe.extendedIngredients)
    },[params.name])
  return (
    <>          
    <h1>{recipe.title}</h1>

    <div className="recipe-container">
  
      <img src={recipe.image} alt="" />
      <div className="details-container">
        <div className="instruction">
        <h3>Instructions</h3>
        <h4 >{recipe.instructions}</h4>
        </div>
        <div className="summary">
                <h3>Ingredients</h3>

            {recipe.extendedIngredients?.map((item)=>{return(<div key={item.id}><p>{item.original}</p></div>)})}
        </div>
      </div>

    </div>
    </>
  )
}

export default Recipe
