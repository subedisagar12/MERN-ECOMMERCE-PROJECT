import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Searchbar() {
  const [input, setInput] = useState("")

  const handleChange =(e)=>{
    setInput(e.target.value)
  }

  const navigate = useNavigate()
  const handleSearch =()=>{
navigate(`search?search_term=${input}`)
  }

  return (
    <div>
    <nav className="navbar bg-body-tertiary">
  <div className="container">
    <div className="d-flex justify-content-center w-100" role="search">
      <input className="form-control me-2 " style={{width:"500px"}} type="search" placeholder="Search" aria-label="Search" onChange={(e)=>handleChange(e)}/>
      <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Searchbar
