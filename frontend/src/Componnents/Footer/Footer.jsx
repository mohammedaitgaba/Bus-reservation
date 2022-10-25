import React from 'react'
import '../../fontawesome/css/all.css'
import './Footer.css'
function Footer() {
  return (
    <section className='Footer_Holder'>
        <div className='Footer_body'>
            <div className="Footer_logo_links">
              <h3>Supratours</h3>
              <p>Quand vous avez le choix, choisissez Supratours</p>
              <div className="links">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <div className="Footer_about">
              <h3>About</h3>
              <p>About us</p>
              <p>Contact us</p>
            </div>
            <div className="Footer_usefull_links">
              <h3>Liens utiles</h3>
              <p>Carrières</p>
              <p>FAQ</p>
              <p>Devenez notre partenaire</p>
            </div>
        </div>
          <hr />
        <div className="Footer_copyrights">
            <div className="Footer_copyrights">
              <p>Copyright 2022 - 2022 </p>
              <p>Supratours App Privacy Policy </p>
              <p>Terms and Conditions</p>
            </div>
        </div>
    </section>
  )
}

export default Footer