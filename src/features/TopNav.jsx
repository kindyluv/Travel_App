import React, { useState } from 'react';
import Styles from './styles/TopNav.module.css';
import ArrowDown from '../assets/ArrowDown.svg';
import Logo from '../assets/TravelLogo.svg';

const TopNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isServicesClicked, setServicesClicked] = useState(false);
  const [hoverHome, setHoverHome] = useState(true);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverPackage, setHoverPackage] = useState(false);
  const [hoverService, setHoverService] = useState(false);

  const handleDropdownToggle = () => {
    if (!isServicesClicked) {
      setShowDropdown(!showDropdown);
    }
    setServicesClicked(!isServicesClicked);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleHover = (item) => {
    if (item === "Home") {
      setHoverHome(true);
      setHoverAbout(false);
      setHoverPackage(false);
      setHoverService(false)
    } else if (item === "About") {
      setHoverHome(false);
      setHoverPackage(false);
      setHoverService(false)
      setHoverAbout(true);
    } else if (item === "Upcoming Packages") {
      setHoverHome(false);
      setHoverAbout(false);
      setHoverPackage(true)
      setHoverService(false)
    } else if (item === "Service") {
      setHoverHome(false);
      setHoverAbout(false);
      setHoverPackage(false);
      setHoverService(true)
    } else {
      setHoverHome(true);
      setHoverAbout(false);
      setHoverPackage(false);
      setHoverService(false)
    }
  };

  return (
    <div className={Styles.TopNavContainer}>
      <div className={Styles.TopNavLogo}>
        <img src={Logo} alt="Travel Logo" />
      </div>
      <ul className={Styles.TopNavMenu}>
        <div
          className={Styles.liBorderDiv}
          onMouseOver={() => handleHover("Home")}
          onMouseLeave={() => handleHover("")}
        >
          <li>Home</li>
          {hoverHome && <div className={Styles.liBorder}></div>}
        </div>
        <div
          className={Styles.liBorderDiv}
          onMouseOver={() => handleHover("About")}
          onMouseLeave={() => handleHover("")}
        >
          <li>About</li>
          {hoverAbout && <div className={Styles.liBorder}></div>}
        </div>
        <div>
          <li
            onClick={handleDropdownToggle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => {handleMouseLeave(); handleHover("")}}
            onMouseOver={() => handleHover("Service")}
          >
            Services{' '}
            <img
              src={ArrowDown}
              alt="Upcoming Package img"
            />
            {showDropdown && (
              <div
                className={Styles.dropdownMenu}
              >
                <ShapeBubble />
              </div>
            )}
          </li>
        </div>
        <div
          className={Styles.liBorderDiv}
          onMouseOver={() => handleHover("Upcoming Packages")}
          onMouseLeave={() => handleHover("")}
        >
          <li>Upcoming Packages</li>
          {(!hoverHome && !hoverAbout) && <div className={Styles.liBorderU}></div>}
        </div>
      </ul>
      <div className={Styles.TopNavButton}>
        <button>Get In Touch</button>
      </div>
    </div>
  );
};

export default TopNav;

export const ShapeBubble = () => {
  return (
      <ul className={Styles.shape}>
        <li>Honeymoon Packages</li>
        <li>Tours Packages</li>
        <li>Musical Events</li>
        <li>Build Package</li>
      </ul>
  );
};
