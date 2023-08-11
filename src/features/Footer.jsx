import React from 'react';
import Styles from './styles/Footer.module.css';
import TwitterIcon from '../assets/Twitter.Logo.svg';
import LinkedinLogo from '../assets/LinkedInLogo.svg';
import MessengerLogo from '../assets/MessengerLogo.svg';
import  TwooLogo from '../assets/TwooLogo.svg';
import TravelLogo from '../assets/TravelBlackLogo.svg'
import FooterBgImg from '../assets/FooterImage.svg'

const Footer = () => {
  return (
    <div className={Styles.FooterMain}>
      <div className={Styles.FooterDivOne}>
        <div className={Styles.TravelFooter}>
          <img src={TravelLogo} alt="TravelLogo" className={Styles.FooterImgOne} />
          <p>Travel helps companies manage payments easily.</p>
          <div>
            <img src={LinkedinLogo} alt="LinkedinLogo" className={Styles.FooterImgTwo} />
            <img src={MessengerLogo} alt="MessengerLogo" className={Styles.FooterImgThree} />
            <img src={TwitterIcon} alt="TwitterIcon" className={Styles.FooterImgFour} />
            <img src={TwooLogo} alt="TwooLogo" className={Styles.FooterImgFive} />
          </div>
        </div>
        <ul className={Styles.FooterUlOne}>
          <li className={Styles.listTop}>Company</li>
          <li className={Styles.listBody}>About Us</li>
          <li  className={Styles.listBody}>Career</li>
          <li  className={Styles.listBody}>Blog</li>
          <li  className={Styles.listBody}>Pricing</li>
        </ul>
        <ul className={Styles.FooterUlTwo}>
          <li className={Styles.listTop}>Destination</li>
          <li  className={Styles.listBody}>Maldives</li>
          <li  className={Styles.listBody}>Los Angelas</li>
          <li  className={Styles.listBody}>Las Vegas</li>
          <li  className={Styles.listBody}>Toronto</li>
        </ul>
        <div className={Styles.FooterNews}>
          <p  className={Styles.FooterNewsP1}>Join Our Newsletter</p>
          <div className={Styles.FooterNewsIC}>
            <input type="text" placeholder='Your email address' />
            <button>Subscribe</button>
          </div>
          <p>*  Will send you weekly updates for your better
tour packages.</p>
        </div>
      </div>
      <div className={Styles.FooterDivTwo}>
        <hr className={Styles.hr} />
        <p>Copyright @ Xpro 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
