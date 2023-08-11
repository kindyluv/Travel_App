import React from 'react';
import Styles from './styles/Tropical.module.css';
import TropicalImage from '../assets/HoneyMoonLogo.svg';

const Tropical = () => {
  return (
    <div className={Styles.TropicalMain}>
      <img className={Styles.TropicalImage} src={TropicalImage} alt='TropicalImage' />
      <div className={Styles.TropicalText}>
        <span className={Styles.TropicalTextOne}>Honeymoon Specials</span>
        <span className={Styles.TropicalTextTwo}>Our Romantic Tropical Destinations</span>
        <p className={Styles.TropicalTextThree}>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        <button className={Styles.TropicalBtn}>View Packages</button>
      </div>
    </div>
  )
}

export default Tropical
