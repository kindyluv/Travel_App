import React from 'react'
import Emirate from '../assets/FlyEmirate.svg';
import Airbnb from '../assets/Airbnb.svg';
import Turkish from '../assets/Turkish.svg';
import Trivago from '../assets/trivago.svg';
import Swiss from '../assets/SwissLogo.svg';
import Styles from './styles/PartnerShip.module.css'

const PartnerShip = () => {
  return (
    <div className={Styles.PartnerShip}>
      <div><img src={Emirate} alt="Emirate" /></div>
      <div><img src={Trivago} alt="Trivago" /></div>
      <div><img src={Airbnb} alt="Airbnb" /></div>
      <div><img src={Turkish} alt="Turkish" /></div>
      <div><img src={Swiss} alt="Swiss" /></div>
    </div>
  )
}

export default PartnerShip
