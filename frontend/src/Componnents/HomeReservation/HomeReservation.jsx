import { useState,useEffect } from 'react'
import moment from 'moment';

import './HomeReservation.css'
function HomeReservation() {
  const [formData,setFormData] = useState({
    cityStart:'',
    cityEnd:'',
})
const [jwtToken , setJwtToken]=useState(localStorage.getItem('token'))
const [travels,setTravels] = useState([]) 
const [width,setWidth] = useState([window.screen.width]) 
 useEffect(()=>{
  setWidth(window.screen.width)
  console.log(width);
 },[window.screen.width])
 
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
                  <div className="info">
                    <div>
                      <p> Ville de depart :  {element.cityStart}</p>
                      <p> Date de depart : {moment(element.dateStart).format('L')+" "+moment(element.dateStart).format('LT')}</p>
                    </div>
                    <i class="fal fa-arrow-from-left"></i>
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
              </div>  
              )):null     
        }
    </div>

    
  </section>
  )
}

export default HomeReservation