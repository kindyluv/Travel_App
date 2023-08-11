import React from 'react';
import Styles from './styles/Offer.module.css';
import FlightCard from '../reusables/FlightCard';
import FlightCardTwo from '../reusables/FlightCardTwo';
import { OfferContent } from '../reusables/Contents';

const Offer = () => {
  return (
    <div className={Styles.offerContainer}>
      <p className={Styles.offerPTagOne}>CATEGORY</p>
      <p className={Styles.offerPTagTwo}>We Offer Best Services</p>
      <div className={Styles.OfferDiv}>
        {OfferContent.map((value, index) => (
          <div key={index} className={Styles.offerContent}>
            {index !== 1 ? (
              <FlightCard
                image={value.image}
                topic={value.topic}
                body={value.body}
                addShadow={index === 1}
              />
            ) : (
              <FlightCardTwo
                image={value.image}
                topic={value.topic}
                body={value.body}
                addShadow={index === 1}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
