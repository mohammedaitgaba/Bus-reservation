import React,{useState,useContext,useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import Signin from '../Sign_in/sign_in';
import AuthContext from '../../contexts/AuthContext';


function Navbar() {
  const [isOpen,setIsOpen] =useState(false)
  const [openLogin, setOpenLogin ] = useState(false);
  const [isLogged , setIsLogged]  = useState(localStorage.getItem('user_id'))

  const logout=()=>{
    localStorage.removeItem("user_id")
    window.location.reload();
  }
  useEffect(()=>{
    setIsLogged(localStorage.getItem('user_id'))
    console.log(isLogged);
  })

  // const {loggedUserId,loggedFirstname} = useContext(AuthContext)
  // console.log(loggedUserId,loggedFirstname);
  return (
    
    <div className='Header_container'>
        <div className="Logo">Supratours </div>
        <div className={`Header_links ${isOpen && "open"}`}>
            <ul className='links'>
                <li><Link to="/">Booking</Link> </li>
                <li><Link to="/Contactus">Contact us</Link></li>
                { isLogged ? <button className='Sign_in'onClick={()=>logout()}> logout</button> : <button className='Sign_in' onClick={()=>setOpenLogin(true)}> Sign in</button>}
                
            </ul>
        </div>
        <div onClick={()=>setIsOpen(!isOpen)} className={`nav_toggel ${isOpen && "open"}`} >
          <div className="menu"></div>
        </div>
        <Signin Open={openLogin} Close={()=> setOpenLogin(false)}/>
    </div>
  )
}

export default Navbar