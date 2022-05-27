import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <Link class="nav-link" to="/">Add student</Link >
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/s">search student</Link >
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/v">view students</Link >
        </li>
        <li class="nav-item dropdown">
       
       
        </li>
      
      </ul>
    
    </div>
  </nav></div>
  )
}

export default Nav