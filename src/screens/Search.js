import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
      var[src,setsrc]=useState('')
      const search1=()=>{
            

      }

  return (
    <div><Nav/>
           <div class="container">
                  <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div class="row g-2">
                              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label">enter admno</label>
                              <input type="text" class="form-control"onChange={(e)=>{setsrc(e.target.value)}}/></div>
                              <div class="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                    <input type="button" value="search" class="btn btn-success"onClick={search1}/>
                              </div>
                              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label"> name</label>
                              <input type="text" class="form-control"/></div>
                              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="form-label"> cgpa</label>
                              <input type="text" class="form-control"/></div>
                             
                             
                            
                        </div>
                  </div>
            </div>
    </div>
  )
}

export default Search