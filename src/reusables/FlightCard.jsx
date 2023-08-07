import React from 'react';
import Styles from './styles/FlightCard.module.css';

const FlightCard = (props) => {
  const { image, topic, body, addShadow } = props;

  return (
    <div
      className={`${Styles.FlightCardContainer} ${
        addShadow ? Styles.boxShadow : ''
      }`}
    >
      <img src={image} alt="propsImage" />
      <p className={Styles.FlightCardtopic}>{topic}</p>
      <p className={Styles.FlightCardbody}>{body}</p>
    </div>
  );
};

export default FlightCard;
