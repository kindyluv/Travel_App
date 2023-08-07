import React from 'react';
import Styles from './styles/Hero.module.css';
import GroupImage from '../assets/GroupImage.svg';
import Twist from '../assets/Twist.svg';

const Hero = () => {
  return (
    <div className={Styles.HeroContainer}>
        <div className={Styles.HeroDiv}>
            <div className={Styles.Twistcontainer}>
                <img className={Styles.HeroImgOne} src={Twist} alt="Twist" />
                <p className={Styles.HeroPtag}>No matter where you're going we will take you there</p>
            </div>
            <div className={Styles.HeroDivInnerOne}>
                <p>Where To?</p>
                <select name="travelType" id={Styles.travelType}>
                    <option value="">Travel Type</option>
                    <option value="">hi</option>
                    <option value="">hi</option>
                </select>
                <select name="duration" id={Styles.duration}>
                    <option value="">Duration</option>
                    <option value="">hi</option>
                    <option value="">hi</option>
                </select>
                <button className={Styles.buttonSearch}>Submit</button>
            </div>
            <div className={Styles.HeroDivInnerTwo}>
                <img className={Styles.GroupImage} src={GroupImage} alt="GroupImage" />
                <span>2,500 people booked Tommorowland Event in last 24 hours</span>
            </div>
        </div>
    </div>
  )
}

export default Hero
