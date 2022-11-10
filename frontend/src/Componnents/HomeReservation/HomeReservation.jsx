import { useState,useEffect } from 'react'
import moment from 'moment';
import {toast} from 'react-toastify';

import './HomeReservation.css'
function HomeReservation() {
  const [formData,setFormData] = useState({
    cityStart:'',
    cityEnd:'',
})
const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
const [travels,setTravels] = useState([]) 
const [ScreenWidth,setScreenWidth] = useState(document.body.clientWidth)

var onresize = function() {
  setScreenWidth(document.body.clientWidth)
}
window.addEventListener("resize", onresize);

const handleChange = (e)=>{
    setFormData((previousState)=>({
        ...previousState,
        [e.target.name] : e.target.value,
    }))
}
const searchTravel=async()=>{
  await fetch(`http://localhost:5000/api/travel/${formData.cityStart}/${formData.cityEnd}`,{
    method: "Get",
    headers: {
        "Authorization":"Bearer "+jwtToken+""
    },
  })
  .then(res => res.json())
  .then(data=> data.travel.forEach(element => {
      console.log(element);
      setTravels(prevArray => [...prevArray, element])
  })
  )
}
const Reserve_Travel = async(travel_id)=>{
  const id_user = localStorage.getItem('user_id')
  await fetch('  http://localhost:5000/api/ticket/confirmTicket',{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({travel_id,id_user})
})
.then(res=>res.json())
.then(data=>{
  if (data.message ==="reserved seccesfully") {
    toast.success(`reserved seccesfully !`, {
      position: toast.POSITION.TOP_CENTER
  });
  }
  if (data.message ==="this travel is alrady full") {
    toast.error(`travel is full!`, {
      position: toast.POSITION.TOP_CENTER
  });
  }
})
}
  return (
    <section className='Booking_container'>
      <div className="booking_form">
        <div className='options'>

        <div className='start_holder'>
            <label htmlFor="">Ville de depart</label>
            <select className="form-select" name='cityStart' aria-label="Default select example" onChange ={handleChange}>
              <option selected disabled >--choisir ville</option>
              <option value={"safi"} >safi</option>
            </select>
          </div>

          <div className='end_holder'>
            <label htmlFor="">Ville d'arrive</label>
            <select className="form-select" name='cityEnd' aria-label="Default select example" onChange ={handleChange}>
              <option selected disabled >--choisir ville</option>
              <option value={"tidas"} >tidas</option>
            </select>
          </div>

          <div className='time_holder'>
            <label htmlFor="date">Date depart</label>
            <input type="date" id='date' />
          </div>
        </div>

        <div className="submit_search" onClick={()=>searchTravel()}>
          Recherche
        </div>
      </div>
        {
          travels.length != 0? <h2>Voyage disponible</h2> : null
        }
      <div className="travels_found_container">
        {travels?
              travels.map((element,i) => (
                <div className="travel_card" key={i}>
                  <div className='ticket_cut_left_side'></div>
                  <div className='ticket_cut_right_side'></div>
                  <div className="info">
                    <div>
                      <p> Ville de depart :  {element.cityStart}</p>
                      <p> Date de depart : {moment(element.dateStart).format('L')+" "+moment(element.dateStart).format('LT')}</p>
                    </div>
                    {ScreenWidth>768?
                      <i className="fal fa-arrow-from-left"></i>:<i className="fal fa-arrow-from-top"></i>
                    } 
                    <div>
                      <p> Ville d'arrive : {element.cityEnd}</p>
                      <p> Date d'arrive  : {moment(element.dateEnd).format('L')+" "+moment(element.dateEnd).format('LT')}</p>
                    </div>
                  </div>
                  <div className='price'>
                    Prix : {element.Price} DH
                  </div>
                  <div className='Bus'>
                    Bus : {element.Bus.name} 
                  </div>
                  <button className='submit_travel' onClick={()=>Reserve_Travel(element._id)}>Reserver</button>
              </div>  
              )):null     
        }
    </div>

    
  </section>
  )
}

export default HomeReservation