import React,{useState,useContext,useEffect} from 'react'
import {Link} from "react-router-dom";
import "./Navbar.css"
import Signin from '../Sign_in/sign_in';
import AuthContext from '../../contexts/AuthContext';


function Navbar() {
  const [isOpen,setIsOpen] =useState(false)
  const [openLogin, setOpenLogin ] = useState(false);
  const [userLogged , setUserLogged]  = useState(localStorage.getItem('user_id'))
  const [adminLogged , setAdminLogged]  = useState(localStorage.getItem('Admin_id'))

  const logout=()=>{
    localStorage.removeItem("user_id")
    localStorage.removeItem("Admin_id")
    localStorage.removeItem("token")
    window.location.reload();
  }
  useEffect(()=>{
    setUserLogged(localStorage.getItem('user_id'))
    setAdminLogged(localStorage.getItem('Admin_id'))
    console.log(adminLogged);
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
                {adminLogged?<li><Link to="/Dushboard">Dushboard</Link></li>:null}
                {userLogged||adminLogged? <button className='Sign_in'onClick={()=>logout()}> logout</button> : <button className='Sign_in' onClick={()=>setOpenLogin(true)}> Sign in</button>}
                
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