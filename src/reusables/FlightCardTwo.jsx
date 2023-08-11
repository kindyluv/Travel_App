import React from 'react';
import Styles from './styles/FlightCard.module.css';

const FlightCardTwo = (props) => {
  const { image, topic, body, addShadow } = props;

  return (
    <div className={Styles.flightCardTwoMain}>
        <div
          className={`${Styles.FlightCardContainer} ${
            addShadow ? Styles.boxShadow : ''
          }`}
        >
          <img src={image} alt="propsImage" />
          <p className={Styles.FlightCardtopic}>{topic}</p>
          <p className={Styles.FlightCardbody}>{body}</p>
        </div>
      <div className={Styles.flightCardSmCard}></div>
    </div>
  );
};

export default FlightCardTwo;
