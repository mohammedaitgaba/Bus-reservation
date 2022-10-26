import React,{useState} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import Sign_in from '../Sign_in/sign_in';

function Navbar() {
  const [isOpen,setIsOpen] =useState(false)
  const [openLogin, setOpenLogin ] = useState(false);

  console.log(openLogin);
  return (
    <div className='Header_container'>
        <div className="Logo">Supratours </div>
        <div className={`Header_links ${isOpen && "open"}`}>
            <ul className='links'>
                <li><Link to="/">Booking</Link> </li>
                <li><Link to="/Contactus">Contact us</Link></li>
                <button className='Sign_in'onClick={()=>setOpenLogin(true)}>Sign in</button>
            </ul>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)} className={`nav_toggel ${isOpen && "open"}`} >
          <div className="menu"></div>
        </div>
        <Sign_in Open={openLogin} Close={()=> setOpenLogin(false)}/>
    </div>
  )
}

export default Navbar