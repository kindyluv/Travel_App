import React from 'react'
import TopNav from './TopNav';
import Hero from './Hero';
import Styles from './styles/LandingPage.module.css'
import PartnerShip from './PartnerShip';
import Offer from './Offer';

const LandingPage = () => {
  return (
    <div className={Styles.LandingPageContainer}>
      <TopNav />
      <Hero />
      <PartnerShip />
      <Offer />
    </div>
  )
}

export default LandingPage
