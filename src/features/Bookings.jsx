import React from 'react';
import BookingImage from '../assets/TripLogo.svg';
import Styles from './styles/Bookings.module.css';
import BookingsCard from '../reusables/BookingsCard';
import {BookingContent} from '../reusables/Contents';

const Bookings = () => {
  return (
    <div className={Styles.BookingsMainContain}>
      <div className={Styles.BookingsMain}>
        <div className={Styles.BookingsDivOne}>
          <p className={Styles.BookingsPtagOne}>Fast & Easy</p>
          <p className={Styles.BookingsPtagTwo}>
            Get Your Favourite
            Resort Bookings
          </p>
          <div className={Styles.BookingsDivTwo}>
            {BookingContent.map ((value, index) => (
              <div key={index} className={Styles.BookingsDivThree}>
                <BookingsCard
                  image={value.image}
                  topic={value.topic}
                  body={value.body}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={Styles.BookingsDivFour}>
          <img
            className={Styles.BookingsImage}
            src={BookingImage}
            alt="BookingImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Bookings;
