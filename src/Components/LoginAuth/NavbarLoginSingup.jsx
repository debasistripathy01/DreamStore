import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
export const NavbarLoginSingup = () => {
  const navigate = useNavigate()
  const handleClick=()=>{
    navigate("/")
  }
  return (
    <div>
      <Link to="/">
        <div className="SignupNavBar" onClick={handleClick}>
          
                <img src={require("../Admin/weblogo.png")} alt="" />
            </div>
      </Link>
    </div>
  )
}
