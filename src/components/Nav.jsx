import React from 'react'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <>
          <header>
          <h3>Recipe App</h3>
        <nav>
        
        <ul className="nav_links">
        <a href='/'><li>Home</li></a>
       
            
            <a href={'/cuisine/American'}><li>American</li></a>
            <a href={'/cuisine/Indian'}><li>Indian</li></a>

        </ul>   
        </nav>
    </header>
    </>
  )
}

export default Nav
