import React, { useState } from 'react';
import Styles from './styles/TopNav.module.css';
import ArrowDown from '../assets/ArrowDown.svg';
import Logo from '../assets/TravelLogo.svg'

const TopNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className={Styles.TopNavContainer}>
      <div className={Styles.TopNavLogo}>
        <img src={Logo} alt="Travel Logo" />
      </div>
      <ul className={Styles.TopNavMenu}>
        <li>Home</li>
        <li>About</li>
        <li
          className={showDropdown ? Styles.active : ''}
          onClick={handleDropdownToggle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Services{' '}
          <img
            src={ArrowDown}
            alt="Upcoming Package img"
            className={showDropdown ? Styles.rotate : ''}
          />
          {showDropdown && (
            <ul
              className={Styles.dropdownMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          )}
        </li>
        <li>Upcoming Packages</li>
      </ul>
      <div className={Styles.TopNavButton}>
        <button>Get In Touch</button>
      </div>
    </div>
  )
}

export default TopNav;
