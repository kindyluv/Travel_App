import React, { useState, useEffect } from 'react';
import Styles from './styles/TopNav.module.css';
import ArrowDown from '../assets/ArrowDown.svg';
import BlackArrowDown from '../assets/BlackArrowDown.svg';
import Logo from '../assets/TravelLogo.svg';
import BlackLogo from '../assets/TravelBlackLogo.svg';

const TopNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isServicesClicked, setServicesClicked] = useState(false);
  const [hoverHome, setHoverHome] = useState(true);
  const [hoverAbout, setHoverAbout] = useState(false);
  const [hoverPackage, setHoverPackage] = useState(false);
  const [hoverService, setHoverService] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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


  const [scrollBg, setScrollBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = 100;
      if (window.scrollY >= scrollPosition) {
        setScrollBg(true);
      } else {
        setScrollBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleIsMobile = () => {
    isMobile === false ? setIsMobile(true) : setIsMobile(false);
    handleOpen()
    setDrawerOpen(!isDrawerOpen)
  }

  function handleOpen() {
    setSidebarVisible(true);
  }

  function handleClose() {
    setSidebarVisible(false);
  }

  return (
    <>
      <div className={`${Styles.TopNavContainer} ${scrollBg ? Styles.scrollBgColor : ''}`}>
        <div className={Styles.TopNavLogo}>
          <img src={scrollBg ? BlackLogo : Logo} alt="Travel Logo" />
        </div>
        <ul className={`${Styles.TopNavMenu} ${scrollBg ? Styles.scrollColor : ''}`}>
          <div
            className={Styles.liBorderDiv}
            onMouseOver={() => handleHover("Home")}
            onMouseLeave={() => handleHover("")}
          >
            <li className={`${scrollBg ? Styles.scrollColor : ''}`}>Home</li>
            {hoverHome && <div className={Styles.liBorder}></div>}
          </div>
          <div
            className={Styles.liBorderDiv}
            onMouseOver={() => handleHover("About")}
            onMouseLeave={() => handleHover("")}
          >
            <li className={`${scrollBg ? Styles.scrollColor : ''}`}>About</li>
            {hoverAbout && <div className={Styles.liBorder}></div>}
          </div>
          <div>
            <li
              className={`${scrollBg ? Styles.scrollColor : ''}`}
              onClick={handleDropdownToggle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => { handleMouseLeave(); handleHover("") }}
              onMouseOver={() => handleHover("Service")}
            >
              Services{' '}
              <img
                src={scrollBg ? BlackArrowDown : ArrowDown}
                alt="Upcoming Package img"
              />
              {(!hoverHome && !hoverAbout && !hoverPackage) && showDropdown && (
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
            <li className={`${scrollBg ? Styles.scrollColor : ''}`}>Upcoming Packages</li>
            {(!hoverHome && !hoverAbout && !hoverService) && <div className={Styles.liBorderU}></div>}
          </div>
        </ul>
        <div className={Styles.TopNavButton}>
          <button>Get In Touch</button>
        </div>
      </div>
      <div className={`${Styles.mobileScreen} ${scrollBg ? Styles.scrollBgColor : ''}`}>
        <div className={Styles.TopNavMobileLogo}>
          <img src={BlackLogo} alt="Travel Logo" />
        </div>
        <div className={Styles.mobileMain}>
          <span className={`${Styles.menuIcon}`} onClick={handleIsMobile}>☰</span>
          <div className={isDrawerOpen ? Styles.drawerOpen : Styles.drawerClosed}>
            {isMobile && sidebarVisible &&
              <div className={Styles.myOverlay}>
                <div className={`${scrollBg ? Styles.scrollColor : ''} ${Styles.notScrollColor}`} onClick={handleClose}>X</div>
                <nav className={`${Styles.mobileScreenUl} ${Styles.menuInFront}`}>
                  <div
                    className={Styles.mobileLiBorderDiv}
                    onMouseOver={() => handleHover("Home")}
                    onMouseLeave={() => handleHover("")}
                  >
                    <li className={`${scrollBg ? Styles.scrollColor : ''}`}>Home</li>
                    {hoverHome && <div className={Styles.mobileLiBorder}></div>}
                  </div>
                  <div
                    className={Styles.liBorderDiv}
                    onMouseOver={() => handleHover("About")}
                    onMouseLeave={() => handleHover("")}
                  >
                    <li className={`${scrollBg ? Styles.scrollColor : ''}`}>About</li>
                    {hoverAbout && <div className={Styles.mobileLiBorder}></div>}
                  </div>
                  <div>
                    <li
                      className={`${scrollBg ? Styles.scrollColor : ''}`}
                      onClick={handleDropdownToggle}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={() => { handleMouseLeave(); handleHover("") }}
                      onMouseOver={() => handleHover("Service")}
                    >
                      Services{' '}
                      <img
                        src={scrollBg ? BlackArrowDown : ArrowDown}
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
                    className={Styles.mobileLiBorderDiv}
                    onMouseOver={() => handleHover("Upcoming Packages")}
                    onMouseLeave={() => handleHover("")}
                  >
                    <li className={`${scrollBg ? Styles.scrollColor : ''}`}>Upcoming Packages</li>
                    {(!hoverHome && !hoverAbout && !hoverService) && <div className={Styles.mobileLiBorderU}></div>}
                  </div>
                </nav>
                <div className={Styles.TopNavButton}>
                  <button>Get In Touch</button>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
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
