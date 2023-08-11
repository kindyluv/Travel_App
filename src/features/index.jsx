import React from 'react'
import TopNav from './TopNav';
import Hero from './Hero';
import Styles from './styles/LandingPage.module.css'
import PartnerShip from './PartnerShip';
import Offer from './Offer';
import Tropical from './Tropical';
import Bookings from './Bookings';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className={Styles.LandingPageContainer}>
      <TopNav />
      <Hero />
      <PartnerShip />
      <Offer />
      <Tropical />
      <Bookings />
      <Footer />
    </div>
  )
}

export default LandingPage
