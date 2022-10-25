import React from 'react'
import HomeBanner from '../../Componnents/homeBanner/HomeBanner'
import HomeReservation from '../../Componnents/HomeReservation/HomeReservation'
import WhyUs from '../../Componnents/WhyUS/WhyUs'

function home() {
  return (
    <div>
      <HomeBanner/>
      <HomeReservation/>
      <WhyUs/>
    </div>

  )
}

export default home