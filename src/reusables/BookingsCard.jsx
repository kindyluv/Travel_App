import React from 'react';
import Styles from './styles/BookingsCard.module.css';

const BookingsCard = (props) => {
  return (
    <div className={Styles.BookingsCardMain}>
      <img className={Styles.BookingsCardImg} src={props.image} alt="img" />
      <div className={Styles.BookingsCarddiv}>
        <p className={Styles.BookingsCardtopic}>{props.topic}</p>
        <p className={Styles.BookingsCardbody}>{props.body}</p>
      </div>
    </div>
  )
}

export default BookingsCard
