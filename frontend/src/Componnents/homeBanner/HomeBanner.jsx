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

      <section className='Why_us_Holder'>
        <div className="WhyUs_title">
         Pourquoi voyager avec nous
        </div>
        <div className="Cards">

          <div className="WhyUs_Card">
            <img src={`${process.env.PUBLIC_URL}/images/EasyIcon.png`} alt="" />
            <div className="card_title">
              facile de réserver
            </div>
            <div className="card_description">
            Avec notre processus de réservation rapide, facile & sûr, <br/> 
            vous pouvez réserver le meilleur bus en toute confiance.
            </div>
          </div>

          <div className="WhyUs_Card">
            <img src={`${process.env.PUBLIC_URL}/images/priceIcon.png`} alt="" />
            <div className="card_title">
              Connaître le prix avant de partir
            </div>
            <div className="card_description">
            Découvrez les meilleures offres, comparez les caractéristiques et économisez 
            de l'argent sur votre prochaine location de bus.
            </div>
          </div>
          <div className="WhyUs_Card">
            <img src={`${process.env.PUBLIC_URL}/images/BusIcon.png`} alt="" />
            <div className="card_title">

            Grande collection d'autobus
            </div>
            <div className="card_description">
              Comme nous élargissons constamment notre base de fournisseurs,<br />
              vous verrez une augmentation constante des bus disponibles.
            </div>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default HomeBanner