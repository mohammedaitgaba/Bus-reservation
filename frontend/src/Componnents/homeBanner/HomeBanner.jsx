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
    </div>
  )
}

export default HomeBanner