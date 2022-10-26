import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  const [isOpen,setIsOpen] =useState(false)
  console.log(isOpen);
  return (
    <div className='Header_container'>
        <div className="Logo">Supratours </div>
        <div className={`Header_links ${isOpen && "open"}`}>
            <ul className='links'>
                <li><Link to="/">Booking</Link> </li>
                <li><Link to="/Contactus">Contact us</Link></li>
                <button className='Sign_in'>Sign in</button>
            </ul>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)} className={`nav_toggel ${isOpen && "open"}`} >
          <div className="menu"></div>
        </div>
    </div>
  )
}

export default Navbar