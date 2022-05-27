import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
      var[name,setname]=useState("")
      var[regno,setreg]=useState("")
      var[cgp,setcgp]=useState("")
      const add=()=>{
           var data={"name":name,"regno":regno,"cgp":cgp}
           
          axios.post("http://localhost:4000/api/addmark",data).then((Response)=>{
            console.log(Response.data)
                
          })

      }
  return (
    <div>
          <Nav/>
          <div class="container">
    <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="row g-8">
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                           <label for="" class="form-label">name</label> 
                           <input type="text" class="form-control" onChange={(e)=>{setname(e.target.value)
                                 
                           }}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">admno</label>
                            <input type="text" class="form-control" onChange={(e)=>{setreg(e.target.value)}}/>
                      </div>
                      <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">cgpa</label>
                            <input type="text" class="form-control"onChange={(e)=>{setcgp(e.target.value)}}/>
                      </div>
                      <div class="col g-2 col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                            <input type="button" value="register" class="btn btn-success" onClick={add}/>
                      </div>
                </div>
          </div>
    </div>
</div></div>
  )
}

export default Add