import React from 'react'
import "./WhyUs.css"
function WhyUs() {
  return (
    <div>
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

      <section className='Pub_reservation'>
            <div className="title_pub">
                Le moyen le plus simple de réserver un bus
            </div>
            <div className="description_pub">
                Notre application de bus de Sydney, rapide, facile et sûre, <br /> 
                vous permet de planifier votre voyage autour des meilleurs itinéraires 
                aux prix de location de bus les moins chers.
            </div>
            <div className="submit_pub">
                Reserver
            </div>
      </section>
    </div>
  )
}

export default WhyUs