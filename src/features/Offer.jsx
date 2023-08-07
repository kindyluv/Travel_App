import React from 'react';
import Styles from './styles/Offer.module.css'
import FlightCard from '../reusables/FlightCard';
import { OfferContent } from '../reusables/Contents';

const Offer = () => {
  return (
    <div className={Styles.offerContainer}>
      <p className={Styles.offerPTagOne}>CATEGORY</p>
      <p className={Styles.offerPTagTwo}>We Offer Best Services</p>
      <div className={Styles.OfferDiv}>
        {OfferContent.map((value, index) => (
            <div key={index}>
                <FlightCard image={value.image} topic={value.topic} body={value.body} addShadow={index === 1} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Offer
