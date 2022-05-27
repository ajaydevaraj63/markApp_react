import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const View = () => {
      var[lists,setlists]=useState([])
      axios.get("http://localhost:4000/api/viewmark").then(
            (response)=>{
                  console.log(response.data)
              setlists(response.data)    
            }
      )
      var list=[
           {
                 "name":"ajay",
                 "reg":"003",
                 "cgp":"9.8"
           }, {
            "name":"anoop",
            "reg":"004",
            "cgp":"9.4"
      },
      {
            "name":"abhi",
            "reg":"006",
            "cgp":"9.3"
      }
      ]

      
  return (
    <div> <Nav/>
          <table class="table">
    <thead>
      <tr>
       
        <th scope="col">name</th>
        <th scope="col">admno</th>
        <th scope="col">cgpa</th>
      </tr>
    </thead>
    <tbody>  {
         
    lists.map((value,key)=>{
   
     
          return  <tr>
        
            <td>{value.name}</td>
            <td>{value.regno}</td>
            <td>{value.cgp}</td>
          </tr>
         

           
  
    }) }
     </tbody> 
  </table></div>
  )
}

export default View