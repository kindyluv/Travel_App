import React from 'react';
import Styles from './styles/Hero.module.css';
import Twist from '../assets/Twist.svg';
import EllipseLogo from '../assets/EllipseLogo.svg';
import EllipseLogo2 from '../assets/EllipseLogo2.svg';
import EllipseLogo3 from '../assets/EllipseLogo3.svg';
import EllipseLogo4 from '../assets/EllipseLogo4.svg';
import EllipseLogo5 from '../assets/EllipseLogo5.svg';
import EllipseLogo6 from '../assets/EllipseLogo6.svg';

const Hero = () => {
  return (
    <div className={Styles.HeroContainer}>
      <div className={Styles.HeroDiv}>
        <div className={Styles.Twistcontainer}>
          <img className={Styles.HeroImgOne} src={Twist} alt="Twist" />
          <p className={Styles.HeroPtag}>
            No matter where you're going we will take you there
          </p>
        </div>
        <div className={Styles.HeroDivInnerOne}>
          <p>Where To?</p>
          <div className={Styles.hrStyle}></div>
          <select name="travelType" id={Styles.travelType}>
            <option value="">Travel Type</option>
            <option value="">hi</option>
            <option value="">hi</option>
          </select>
          <div className={Styles.hrStyle}></div>
          <select name="duration" id={Styles.duration}>
            <option value="">Duration</option>
            <option value="">hi</option>
            <option value="">hi</option>
          </select>
          <button className={Styles.buttonSearch}>Submit</button>
        </div>
        <section className={Styles.clients}>
          <section className={Styles.ellipseParent}>
            <img
              className={Styles.groupChild5}
              alt="/ellipse-31@2x.png"
              src={EllipseLogo}
            />
            <img
              className={Styles.groupChild6}
              alt="/ellipse-31@2x.png"
              src={EllipseLogo2}
            />
            <img className={Styles.groupChild7} alt="" src={EllipseLogo3} />
            <img className={Styles.groupChild8} alt="" src={EllipseLogo4} />
            <img className={Styles.groupChild9} alt="" src={EllipseLogo5} />
            <img className={Styles.groupChild10} alt="" src={EllipseLogo6} />
            <img className={Styles.groupChild11} alt="" src={EllipseLogo} />
            <div className={Styles.div44}><p>+</p></div>
          </section>
          <span className={Styles.peopleBookedTommorowland}>
            2,500 people booked Tommorowland Event in last 24 hours
          </span>
        </section>
      </div>
    </div>
  );
};

export default Hero;
