import React from 'react'
import './HomeReservation.css'
function HomeReservation() {
  return (
    <section className='Booking_container'>
    <div className="booking_form">
      <div className='options'>

       <div className='start_holder'>
          <label htmlFor="">Ville de depart</label>
          <select className="form-select" aria-label="Default select example" >
            <option defaultValue={"dd"} >--</option>
          </select>
        </div>

        <div className='end_holder'>
          <label htmlFor="">Ville d'arrive</label>
          <select className="form-select" aria-label="Default select example" >
            <option defaultValue={"dd"} >--</option>
          </select>
        </div>

        <div className='time_holder'>
          <label htmlFor="date">Date depart</label>
          <input type="date" id='date' />
        </div>
      </div>

      <div className="submit_search">
        Recherche
      </div>

    </div>
  </section>
  )
}

export default HomeReservation