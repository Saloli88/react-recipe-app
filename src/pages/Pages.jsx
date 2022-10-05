import React from 'react'
import Home from './Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Searched from './Searched'
import Cuisine from './Cuisine'
import Recipe from './Recipe';

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cuisine/:type' element={<Cuisine></Cuisine>}></Route>
      <Route path='/searched/:search' element={<Searched></Searched>}></Route>
      <Route path='/recipe/:name' element={<Recipe></Recipe>}></Route>
    </Routes>
  )
}

export default Pages
