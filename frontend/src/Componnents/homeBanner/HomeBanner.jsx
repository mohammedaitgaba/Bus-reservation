import React from 'react'
import './HomeBanner.css'
function HomeBanner() {
  return (
    <div>
      <section className="banner">
        <div className='banner_shdow'></div>
        <img src={`${process.env.PUBLIC_URL}/images/background.jpg`} alt="background"/>
        <div className="banner_mini_title">
          The Smarter Way To Plan Your Trip
        </div>
        <div className="banner_title">
          With supratoure 3ich
        </div>
      </section>

      <section className='Booking_container'>
        <div className="booking_form">
          <div className='options'>

           <div className='start_holder'>
              <label htmlFor="">Ville de depart</label>
              <select class="form-select" aria-label="Default select example" >
                <option selected disabled>--</option>
              </select>
            </div>

            <div className='end_holder'>
              <label htmlFor="">Ville d'arrive</label>
              <select class="form-select" aria-label="Default select example" >
                <option selected disabled>--</option>
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
    </div>
  )
}

export default HomeBanner