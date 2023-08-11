import { useCallback } from "react";
import "./styles/HomePage.css";
import EllipseLogo from '../assets/EllipseLogo.svg';

const Homepage = () => {
  const onHomeClick = useCallback(() => {
    window.open("https://goggle.com");
  }, []);

  return (
    <div className="homepage">
      <section className="footer">
        <img className="footer-img-icon" alt="" src="/footer-img@2x.png" />
        <div className="footer1">
          <p className="copyright-xpro">
            Copyright @ Xpro 2022. All Rights Reserved.
          </p>
          <div className="footer-child" />
          <div className="nav-wrap-parent">
            <div className="nav-wrap">
              <ul className="nav-list-item" company>
                <b className="company">Company</b>
                <div className="about-us-parent">
                  <li className="about-us">About Us</li>
                  <li className="about-us" career>
                    Careers
                  </li>
                  <li className="about-us" blog>
                    Blog
                  </li>
                  <li className="about-us" pricing>
                    Pricing
                  </li>
                </div>
              </ul>
              <ul className="nav-list-item1" destination>
                <b className="company">Destinations</b>
                <div className="maldives-parent">
                  <li className="about-us" maldives>
                    Maldives
                  </li>
                  <li className="about-us" id="maldives">
                    Los Angelas
                  </li>
                  <li className="about-us" id="maldives">
                    Las Vegas
                  </li>
                  <li className="about-us" id="maldives">
                    Torronto
                  </li>
                </div>
              </ul>
              <div className="nav-list-item2" id="join">
                <p className="join-our-newsletter">Join Our Newsletter</p>
                <div className="nav-list-item-inner">
                  <div className="rectangle-parent">
                    <input className="group-child" type="text" />
                    <div className="your-email-address">Your email address</div>
                    <button className="group-item" />
                    <div className="subscribe">Subscribe</div>
                  </div>
                </div>
                <p className="will-send-you-container">
                  <span className="will-send-you">
                    * Will send you weekly updates for your better
                  </span>
                  <span className="will-send-you">tour packages.</span>
                </p>
              </div>
            </div>
            <div className="travel-helps-companies-manage-parent">
              <div className="travel-helps-companies">
                Travel helps companies manage payments easily.
              </div>
              <div className="messenger-parent">
                <a className="messenger" href="www.google.com" target="_blank">
                  <img className="vector-icon" alt="" src="" />
                </a>
                <a className="linkedin" href="www.google.com" target="_blank">
                  <img className="vector-icon1" alt="" src="" />
                  <img className="vector-icon2" alt="" src="" />
                  <img className="vector-icon3" alt="" src="" />
                </a>
                <a className="twitter" target="_blank">
                  <img className="vector-icon4" alt="" src="" />
                </a>
                <a className="twoo" target="_blank">
                  <img className="vector-icon5" alt="" src="" />
                </a>
              </div>
            </div>
          </div>
          <div className="logo">
            <b className="travel">Travel</b>
            <img className="logo-child" alt="" src="" />
          </div>
        </div>
      </section>
      <section className="book-a-trip" id="booking">
        <section className="illustration" id="TripDiv">
          <div className="background-element">
            <div className="div">+</div>
            <div className="div1">+</div>
            <div className="div2">+</div>
            <div className="div3">+</div>
            <div className="div4">+</div>
            <div className="div5">+</div>
            <div className="div6">+</div>
            <div className="div7">+</div>
            <div className="div8">+</div>
            <div className="div9">+</div>
            <div className="div10">+</div>
            <div className="div11">+</div>
            <div className="div12">+</div>
            <div className="div13">+</div>
            <div className="div14">+</div>
            <div className="div15">+</div>
            <div className="div16">+</div>
            <div className="div17">+</div>
            <div className="div18">+</div>
            <div className="div19">+</div>
            <div className="div20">+</div>
            <div className="div21">+</div>
          </div>
          <img className="image-872-icon" alt="" src="" />
          <div className="illustration1">
            <img className="illustration-child" alt="" src="" />
            <div className="image">
              <div className="rectangle-group">
                <div className="group-inner" />
                <img className="options-icon" alt="" src="" />
                <img className="building-1-icon" alt="" src="" />
                <div className="people-are-interested">
                  60 people are interested
                </div>
                <div className="june">14-29 June</div>
                <div className="by-jr-martinax">by JR Martinax</div>
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle-17@2x.png"
                />
                <div className="trip-to-hawaii">{`Trip to Hawaii `}</div>
                <div className="line-div" />
              </div>
              <div className="rectangle-container">
                <div className="rectangle-div" />
                <div className="trip-to-rome">Trip to rome</div>
                <div className="completed">
                  <span>40%</span>
                  <span className="completed1"> completed</span>
                </div>
                <div className="ellipse-div" />
                <img
                  className="mask-group-icon"
                  alt=""
                  src=""
                />
                <div className="ongoing">Ongoing</div>
                <div className="group-div">
                  <div className="group-child1" />
                  <div className="group-child2" />
                </div>
              </div>
              <img className="heart-6-1" alt="" src="" />
            </div>
          </div>
        </section>
        <section className="context" id="righBooking">
          <div className="heading">
            <h2 className="heading1">
              <p className="get-your-favourite">Get Your Favourite</p>
              <p className="get-your-favourite">Resort Bookings</p>
            </h2>
            <p className="subheading">Fast & Easy</p>
          </div>
          <section className="values" id="destinationDiv">
            <section className="value-01" id="des1">
              <img className="value-01-child" alt="" src="" />
              <p className="choose-destination">Choose Destination</p>
              <p className="lorem-ipsum-dolor-container">
                <span className="will-send-you">{`Lorem ipsum dolor sit amet, consectetur `}</span>
                <span className="will-send-you">{`adipiscing elit. Urna, tortor tempus. `}</span>
              </p>
            </section>
            <section className="value-03">
              <img className="value-03-child" alt="" src="" />
              <p className="lorem-ipsum-dolor-container1">
                <span className="will-send-you">{`Lorem ipsum dolor sit amet, consectetur `}</span>
                <span className="will-send-you">{`adipiscing elit. Urna, tortor tempus. `}</span>
              </p>
              <p className="choose-destination">Let’s Go</p>
            </section>
            <section className="value-02">
              <p className="lorem-ipsum-dolor-container">
                <span className="will-send-you">{`Lorem ipsum dolor sit amet, consectetur `}</span>
                <span className="will-send-you">{`adipiscing elit. Urna, tortor tempus. `}</span>
              </p>
              <p className="choose-destination">Check Availability</p>
              <img className="value-02-child" alt="" src="" />
            </section>
          </section>
        </section>
      </section>
      <div className="background-element1">
        <div className="div22">+</div>
        <div className="div23">+</div>
        <div className="div24">+</div>
        <div className="div25">+</div>
        <div className="div26">+</div>
        <div className="div27">+</div>
        <div className="div28">+</div>
        <div className="div29">+</div>
        <div className="div30">+</div>
        <div className="div31">+</div>
        <div className="div32">+</div>
        <div className="div33">+</div>
        <div className="div34">+</div>
        <div className="div35">+</div>
        <div className="div36">+</div>
        <div className="div37">+</div>
        <div className="div38">+</div>
        <div className="div39">+</div>
        <div className="div40">+</div>
        <div className="div41">+</div>
        <div className="div42">+</div>
        <div className="div43">+</div>
      </div>
      <section className="romantic-tropical-land" id="tropicalDiv">
        <section className="illustration2" id="romanticalDiv">
          <img className="illustration-item" alt="" src="" />
          <b className="honeymoon-packages">Honeymoon Packages</b>
          <img className="mask-group-icon1" alt="" src="" />
          <img className="illustration-inner" alt="" src="" />
          <img className="ellipse-icon" alt="" src="" />
          <img className="illustration-child1" alt="" src="" />
        </section>
        <section className="context1" id="tropicalRight">
          <p className="honeymoon-specials">Honeymoon Specials</p>
          <p className="our-romantic-tropical">
            Our Romantic Tropical Destinations
          </p>
          <button className="button-search" id="packageBtn">
            <div className="view-packages">View Packages</div>
          </button>
          <p className="et-labore-harum">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </p>
        </section>
      </section>
      <section className="best-service" id="category">
        <section className="title">
          <p className="category">CATEGORY</p>
          <p className="we-offer-best">We Offer Best Services</p>
        </section>
        <section className="services">
          <section className="guided-tours" id="cardOne">
            <p className="sunt-qui-repellat">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <p className="guided-tours1">Guided Tours</p>
            <img
              className="guided-tours-child"
              alt=""
              src=""
            />
          </section>
          <section className="best-flight-options-selected" id="CardTwo">
            <div className="vector-parent">
              <img className="group-child3" alt="/group-1000001691@2x.png" src="" />
              <div className="group-child4" />
            </div>
            <p className="sunt-qui-repellat1">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <p className="best-flights-options">Best Flights Options</p>
            <img
              className="best-flight-options-selected-child"
              alt="/group-1000001691@2x.png"
              src=""
            />
          </section>
          <section className="religious-tours" id="CardThree">
            <p className="religious-tours1">Religious Tours</p>
            <p className="sunt-qui-repellat2">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
            <img
              className="religious-tours-child"
              alt="/group-1000001691@2x.png"
              src=""
            />
          </section>
          <section className="medical-insurance" id="CardFour">
            <div className="sunt-qui-repellat3">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </div>
            <p className="medical-insurance1">Medical insurance</p>
            <img
              className="medical-insurance-child"
              alt="/group-1000001691@2x.png"
              src=""
            />
          </section>
        </section>
      </section>
      <div className="header">
        <img className="header-child" alt="" src="/rectangle-19290@2x.png" />
        <img className="vector-icon6" alt="" src="/vector6.svg" />
        <section className="context2" id="heroSection">
          <section className="clients" id="eventDiv">
            <p className="people-booked-tommorowland" id="eventPtag">
              2,500 people booked Tommorowland Event in last 24 hours
            </p>
            <section className="ellipse-parent" id="hroMiniImaes">
              <img className="group-child5" alt="/ellipse-31@2x.png" src={EllipseLogo} />
              <img className="group-child6" alt="/ellipse-31@2x.png" src={EllipseLogo} />
              <img className="group-child7" alt="" src={EllipseLogo} />
              <img className="group-child8" alt="" src={EllipseLogo} />
              <img className="group-child9" alt="" src={EllipseLogo} />
              <img className="group-child10" alt="" src={EllipseLogo} />
              <img className="group-child11" alt="" src={EllipseLogo} />
            </section>
            <div className="div44">+</div>
          </section>
          <div className="context3">
            <p className="slogans" id="HeroText">
              No matter where you’re going to, we’ll take you there
            </p>
            <section className="searcging-tools" id="HeroTravelSection">
              <div className="searcging-tools-child" />
              <button className="button-search1" id="heroBtn">
                <div className="submit">Submit</div>
              </button>
              <input className="where-to" type="text" placeholder="Where to?" />
              <div className="akar-iconschevron-down" />
            </section>
            <select className="group-select" />
            <select className="group-select1" />
            <img className="context-child" alt="" src="" />
          </div>
        </section>
        <div className="header-item" id="hrDiv" />
        <div className="header-inner" id="hrDiv2" />
        <section className="top-nav-bar" id="topNav">
          <div className="nav-bar" id="topNavRightSide">
            <ul className="nav-elements" id="navigation">
              <a
                className="home"
                href="https://google.com"
                target="_blank"
                onClick={onHomeClick}
              >
                Home
              </a>
              <a className="about" href="#" target="_blank">
                About
              </a>
              <p className="services1" id="service">
                Services
              </p>
              <a className="upcomming-packages">Upcomming Packages</a>
            </ul>
            <button className="sign-in" id="getInTouch">
              <div className="vector-group">
                <img className="group-child12" alt="/rectangle-12.svg" src="" />
                <div className="get-in-touch">Get in Touch</div>
              </div>
            </button>
            <div className="active-indicator" />
          </div>
          <div className="logo1" id="TravelLogo">
            <b className="travel">Travel</b>
            <img className="logo-child" alt="" src="" />
          </div>
        </section>
        <div className="scroll">
          <div className="scroll-child" />
          <div className="scroll-item" />
          <div className="scroll1">Scroll</div>
        </div>
        <div className="rectangle-parent1">
          <div className="group-child13" />
          <div className="group-child14" />
          <div className="group-child15" />
        </div>
      </div>
      <section className="partners" id="partnersDiv">
        <img className="mask-group-icon2" alt="/mask-group2@2x.png" src="" />
        <img className="mask-group-icon3" alt="/mask-group2@2x.png" src="" />
        <img className="mask-group-icon4" alt="" src="" />
        <img className="image-912-icon" alt="" src="" />
        <img className="image-909-icon" alt="/mask-group2@2x.png" src="" />
      </section>
      <div className="services2">
        <img className="union-icon" alt="/union.svg" src="" />
        <div className="honeymoon-packages1">Honeymoon Packages</div>
        <div className="tours-packages">Tours Packages</div>
        <div className="build-package">Build Package</div>
        <div className="musical-events">Musical Events</div>
      </div>
    </div>
  );
};

export default Homepage;
