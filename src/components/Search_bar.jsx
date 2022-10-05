import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
function Search_bar() {
  const [input,setInput] = useState("")
  const navigate= useNavigate()
  const submitHandler = (event)=>{
    event.preventDefault()
    navigate('/searched/'+input)
  }
  return (
    <div>
    <form>
    <div>
      <input onChange={
        (event)=>{setInput(event.target.value)}
          
        } placeholder='Search recipes...' value={input} type='text'></input>
        <button onClick={submitHandler} className='btn'>Search</button>
    </div>
      
    </form>
    </div>
  )
}

export default Search_bar
