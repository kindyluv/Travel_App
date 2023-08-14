import { useCallback } from "react";
import styled from "styled-components";

const FooterImgIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 967px;
  width: 577px;
  height: 484px;
  object-fit: cover;
  opacity: 0.07;
`;
const CopyrightXpro = styled.p`
  margin: 0;
  position: absolute;
  top: 320px;
  left: 456px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
`;
const FooterChild = styled.div`
  position: absolute;
  top: 278px;
  left: 0px;
  background-color: #e5e5ea;
  width: 1200px;
  height: 2px;
`;
const Company = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 24px;
`;
const AboutUs = styled.li`
  position: relative;
  line-height: 24px;
  font-weight: 500;
`;
const AboutUsParent = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18px;
  font-size: var(--font-size-base);
`;
const NavListItem = styled.ul`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 97px;
  height: 198px;
`;
const MaldivesParent = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  font-size: var(--font-size-base);
`;
const NavListItem1 = styled.ul`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 234px;
  width: 132px;
  height: 180px;
`;
const JoinOurNewsletter = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-2xl);
  line-height: 24px;
  font-weight: 700;
`;
const GroupChild = styled.input`
  border: none;
  background-color: #eeeeff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 389px;
  height: 52px;
`;
const YourEmailAddress = styled.div`
  position: absolute;
  top: 14px;
  left: 15px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  opacity: 0.2;
`;
const GroupItem = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-salmon);
  position: absolute;
  top: 0px;
  left: 240px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  width: 149px;
  height: 52px;
`;
const Subscribe = styled.div`
  position: absolute;
  top: 13px;
  left: 283px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  color: var(--white);
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 389px;
  height: 52px;
`;
const NavListItemInner = styled.div`
  position: absolute;
  top: 48px;
  left: 0px;
  width: 389px;
  height: 52px;
`;
const WillSendYou = styled.span`
  display: block;
`;
const WillSendYouContainer = styled.p`
  margin: 0;
  position: absolute;
  top: 121px;
  left: 0px;
  letter-spacing: -0.02em;
  line-height: 26px;
  font-weight: 500;
  white-space: pre-wrap;
  opacity: 0.5;
`;
const NavListItem2 = styled.div`
  position: absolute;
  top: 0px;
  left: 522px;
  width: 389px;
  height: 173px;
  font-size: var(--font-size-base);
`;
const NavWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 289px;
  width: 911px;
  height: 198px;
`;
const TravelHelpsCompanies = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.02em;
  line-height: 28px;
  font-weight: 500;
  display: inline-block;
  width: 213px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Messenger = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 35.99px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const VectorIcon1 = styled.img`
  position: absolute;
  height: 68.44%;
  width: 64.63%;
  top: 31.56%;
  right: 0%;
  bottom: 0%;
  left: 35.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon2 = styled.img`
  position: absolute;
  height: 66.76%;
  width: 20.73%;
  top: 33.24%;
  right: 77.62%;
  bottom: 0%;
  left: 1.65%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const VectorIcon3 = styled.img`
  position: absolute;
  height: 24.13%;
  width: 24.02%;
  top: 0%;
  right: 75.98%;
  bottom: 75.87%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Linkedin = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const VectorIcon4 = styled.img`
  position: absolute;
  height: 81.25%;
  width: 100%;
  top: 9.38%;
  right: 0%;
  bottom: 9.37%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Twitter = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 71.97px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const VectorIcon5 = styled.img`
  position: absolute;
  height: 54.23%;
  width: 100.15%;
  top: 22.88%;
  right: -0.15%;
  bottom: 22.88%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Twoo = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 107.96px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const MessengerParent = styled.div`
  position: absolute;
  top: 87px;
  left: 0px;
  width: 127.96px;
  height: 20px;
`;
const TravelHelpsCompaniesManageParent = styled.div`
  position: absolute;
  top: 45px;
  left: 0px;
  width: 213px;
  height: 107px;
  font-size: var(--font-size-base);
  color: #757095;
`;
const NavWrapParent = styled.div`
  position: absolute;
  top: 21px;
  left: 2px;
  width: 1200px;
  height: 198px;
  text-align: left;
  font-size: var(--font-size-2xl);
`;
const Travel = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  text-transform: capitalize;
`;
const LogoChild = styled.img`
  position: absolute;
  top: 26.04px;
  left: 28px;
  width: 98.6px;
  height: 38.14px;
  overflow: hidden;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 126.6px;
  height: 64.18px;
  font-size: 31.62px;
  color: var(--color-darkslateblue-100);
  font-family: var(--font-volkhov);
`;
const Footer1 = styled.div`
  position: absolute;
  top: 94px;
  left: 0px;
  width: 1202px;
  height: 346px;
`;
const Footer = styled.section`
  position: absolute;
  top: 3488px;
  left: 188px;
  width: 1544px;
  height: 484px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-manrope);
`;
const Div = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--st);
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div1 = styled.div`
  position: absolute;
  top: 0px;
  left: 35px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div2 = styled.div`
  position: absolute;
  top: 0px;
  left: 70px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div3 = styled.div`
  position: absolute;
  top: 35px;
  left: 0px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div4 = styled.div`
  position: absolute;
  top: 35px;
  left: 35px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div5 = styled.div`
  position: absolute;
  top: 35px;
  left: 70px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div6 = styled.div`
  position: absolute;
  top: 35px;
  left: 105px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div7 = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div8 = styled.div`
  position: absolute;
  top: 70px;
  left: 35px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div9 = styled.div`
  position: absolute;
  top: 70px;
  left: 70px;
  color: var(--nd);
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div10 = styled.div`
  position: absolute;
  top: 70px;
  left: 105px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div11 = styled.div`
  position: absolute;
  top: 70px;
  left: 140px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div12 = styled.div`
  position: absolute;
  top: 105px;
  left: 0px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div13 = styled.div`
  position: absolute;
  top: 105px;
  left: 35px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div14 = styled.div`
  position: absolute;
  top: 105px;
  left: 70px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div15 = styled.div`
  position: absolute;
  top: 105px;
  left: 105px;
  color: var(--color-salmon);
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div16 = styled.div`
  position: absolute;
  top: 105px;
  left: 140px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div17 = styled.div`
  position: absolute;
  top: 140px;
  left: 0px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div18 = styled.div`
  position: absolute;
  top: 140px;
  left: 35px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div19 = styled.div`
  position: absolute;
  top: 140px;
  left: 70px;
  color: var(--color-salmon);
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div20 = styled.div`
  position: absolute;
  top: 140px;
  left: 105px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Div21 = styled.div`
  position: absolute;
  top: 140px;
  left: 140px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const BackgroundElement = styled.div`
  position: absolute;
  top: 447px;
  left: 0px;
  width: 153px;
  height: 166px;
  transform: rotate(90deg);
  transform-origin: 0 0;
`;
const Image872Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 187px;
  width: 692px;
  height: 385px;
  object-fit: cover;
`;
const IllustrationChild = styled.img`
  position: absolute;
  top: -150px;
  left: -150px;
  width: 654px;
  height: 667px;
  opacity: 0.4;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xl);
  background-color: var(--white);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.81481170654297px 46.85px rgba(0, 0, 0, 0.02),
    0px 38.51852035522461px 25.48px rgba(0, 0, 0, 0.01),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.148148536682129px 6.52px rgba(0, 0, 0, 0.01),
    0px 1.8518518209457397px 3.15px rgba(0, 0, 0, 0);
  width: 370px;
  height: 400px;
`;
const OptionsIcon = styled.img`
  position: absolute;
  top: 283px;
  left: 28px;
  width: 139px;
  height: 36px;
`;
const Building1Icon = styled.img`
  position: absolute;
  top: 348px;
  left: 25px;
  width: 16px;
  height: 16px;
`;
const PeopleAreInterested = styled.div`
  position: absolute;
  top: 349px;
  left: 56px;
  letter-spacing: -0.02em;
  line-height: 124.5%;
  font-weight: 500;
`;
const June = styled.div`
  position: absolute;
  top: 242px;
  left: 25px;
  line-height: 124.5%;
  font-weight: 500;
`;
const ByJrMartinax = styled.div`
  position: absolute;
  top: 242px;
  left: 129px;
  line-height: 124.5%;
  font-weight: 500;
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 25px;
  border-radius: var(--br-7xl);
  width: 321px;
  height: 161px;
  object-fit: cover;
`;
const TripToHawaii = styled.div`
  position: absolute;
  top: 207px;
  left: 25px;
  font-size: var(--font-size-lg);
  letter-spacing: 0.02em;
  line-height: 124.5%;
  font-weight: 500;
  color: var(--black1);
`;
const LineDiv = styled.div`
  position: absolute;
  top: 242.5px;
  left: 115.5px;
  background-color: var(--text-2);
  border-right: 1px solid var(--text-2);
  box-sizing: border-box;
  width: 1px;
  height: 17px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 370px;
  height: 400px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 18px;
  background-color: var(--white);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.81481170654297px 46.85px rgba(0, 0, 0, 0.02),
    0px 38.51852035522461px 25.48px rgba(0, 0, 0, 0.01),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.148148536682129px 6.52px rgba(0, 0, 0, 0.01),
    0px 1.8518518209457397px 3.15px rgba(0, 0, 0, 0);
  width: 263px;
  height: 129px;
`;
const TripToRome = styled.div`
  position: absolute;
  top: 39px;
  left: 81px;
  font-size: var(--font-size-lg);
  letter-spacing: -0.01em;
  line-height: 124.5%;
  font-weight: 500;
`;
const Span = styled.span``;
const Completed1 = styled.span`
  color: var(--black1);
`;
const Completed = styled.div`
  position: absolute;
  top: 75px;
  left: 80px;
  letter-spacing: -0.05em;
  line-height: 124.5%;
  font-weight: 500;
  color: var(--color-salmon);
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 18px;
  left: 20px;
  border-radius: 50%;
  background-color: var(--white);
  box-shadow: 1px 9px 6px rgba(105, 104, 104, 0.13);
  width: 50px;
  height: 50px;
  opacity: 0.3;
`;
const MaskGroupIcon = styled.img`
  position: absolute;
  top: 18px;
  left: 20px;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const Ongoing = styled.div`
  position: absolute;
  top: 16px;
  left: 82px;
  letter-spacing: -0.04em;
  line-height: 124.5%;
  font-weight: 500;
  color: var(--text-2);
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xl);
  background-color: var(--circle);
  width: 156px;
  height: 5px;
`;
const GroupChild2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xl);
  background-color: var(--color-salmon);
  width: 73px;
  height: 5px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 102px;
  left: 82px;
  width: 156px;
  height: 5px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 219px;
  left: 222px;
  width: 263px;
  height: 129px;
  font-size: var(--font-size-sm);
  color: var(--black1);
`;
const Heart61 = styled.img`
  position: absolute;
  top: 349.71px;
  left: 325px;
  width: 20px;
  height: 18.58px;
`;
const Image1 = styled.div`
  position: absolute;
  top: 17px;
  left: 43px;
  width: 485px;
  height: 400px;
`;
const Illustration1 = styled.div`
  position: absolute;
  top: 127px;
  left: 26px;
  width: 528px;
  height: 417px;
  font-size: var(--font-size-base);
  color: var(--text-2);
  font-family: var(--font-poppins);
`;
const Illustration = styled.section`
  position: absolute;
  top: 0px;
  left: 726px;
  width: 879px;
  height: 600px;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gainsboro-100);
  font-family: var(--font-roboto);
`;
const GetYourFavourite = styled.p`
  margin: 0;
`;
const Heading1 = styled.h2`
  margin: 0;
  position: absolute;
  top: 42px;
  left: 0px;
  font-size: inherit;
  text-transform: capitalize;
  font-weight: 700;
  font-family: inherit;
`;
const Subheading = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: var(--font-size-lg);
  font-weight: 700;
  font-family: var(--font-poppins);
  color: var(--color-salmon);
  text-align: center;
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 458px;
  height: 172px;
`;
const Value01Child = styled.img`
  position: absolute;
  top: 4px;
  left: 0px;
  width: 47px;
  height: 48px;
  object-fit: cover;
`;
const ChooseDestination = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 68px;
  line-height: 124.5%;
  font-weight: 700;
`;
const LoremIpsumDolorContainer = styled.p`
  margin: 0;
  position: absolute;
  top: 24px;
  left: 68px;
  line-height: 124.5%;
`;
const Value01 = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 395px;
  height: 64px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const Value03Child = styled.img`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 47px;
  height: 48px;
`;
const LoremIpsumDolorContainer1 = styled.p`
  margin: 0;
  position: absolute;
  top: 25px;
  left: 68px;
  line-height: 124.5%;
`;
const Value03 = styled.section`
  position: absolute;
  top: 220px;
  left: 0px;
  width: 395px;
  height: 65px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const Value02Child = styled.img`
  position: absolute;
  top: 10px;
  left: 0px;
  width: 47px;
  height: 48px;
`;
const Value02 = styled.section`
  position: absolute;
  top: 106px;
  left: 0px;
  width: 395px;
  height: 64px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const Values = styled.section`
  position: absolute;
  top: 203px;
  left: 0px;
  width: 395px;
  height: 285px;
`;
const Context = styled.section`
  position: absolute;
  top: 66px;
  left: 0px;
  width: 458px;
  height: 488px;
  text-align: left;
  font-size: var(--font-size-31xl);
  color: var(--color-darkslateblue-100);
  font-family: var(--font-volkhov);
`;
const BookATrip = styled.section`
  position: absolute;
  top: 2822px;
  left: 277px;
  width: 1605px;
  height: 600px;
`;
const Div22 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  color: var(--st);
`;
const Div23 = styled.div`
  position: absolute;
  top: -35px;
  left: 0px;
`;
const Div24 = styled.div`
  position: absolute;
  top: -70px;
  left: 0px;
`;
const Div25 = styled.div`
  position: absolute;
  top: 0px;
  left: 35px;
`;
const Div26 = styled.div`
  position: absolute;
  top: -35px;
  left: 35px;
`;
const Div27 = styled.div`
  position: absolute;
  top: -70px;
  left: 35px;
`;
const Div28 = styled.div`
  position: absolute;
  top: -105px;
  left: 35px;
`;
const Div29 = styled.div`
  position: absolute;
  top: 0px;
  left: 70px;
`;
const Div30 = styled.div`
  position: absolute;
  top: -35px;
  left: 70px;
`;
const Div31 = styled.div`
  position: absolute;
  top: -70px;
  left: 70px;
  color: var(--nd);
`;
const Div32 = styled.div`
  position: absolute;
  top: -105px;
  left: 70px;
`;
const Div33 = styled.div`
  position: absolute;
  top: -140px;
  left: 70px;
`;
const Div34 = styled.div`
  position: absolute;
  top: 0px;
  left: 105px;
`;
const Div35 = styled.div`
  position: absolute;
  top: -35px;
  left: 105px;
`;
const Div36 = styled.div`
  position: absolute;
  top: -70px;
  left: 105px;
`;
const Div37 = styled.div`
  position: absolute;
  top: -105px;
  left: 105px;
  color: var(--color-salmon);
`;
const Div38 = styled.div`
  position: absolute;
  top: -140px;
  left: 105px;
`;
const Div39 = styled.div`
  position: absolute;
  top: 0px;
  left: 140px;
`;
const Div40 = styled.div`
  position: absolute;
  top: -35px;
  left: 140px;
`;
const Div41 = styled.div`
  position: absolute;
  top: -70px;
  left: 140px;
  color: var(--color-salmon);
`;
const Div42 = styled.div`
  position: absolute;
  top: -105px;
  left: 140px;
`;
const Div43 = styled.div`
  position: absolute;
  top: -140px;
  left: 140px;
`;
const BackgroundElement1 = styled.div`
  position: absolute;
  top: 2724px;
  left: 731px;
  width: 153px;
  height: 166px;
  color: var(--color-gainsboro-100);
  font-family: var(--font-roboto);
`;
const IllustrationItem = styled.img`
  position: absolute;
  top: 33.49px;
  left: 176.96px;
  width: 478.49px;
  height: 711.99px;
`;
const HoneymoonPackages = styled.b`
  position: absolute;
  top: 745.31px;
  left: 90px;
  line-height: 67.91px;
  transform: rotate(-90deg);
  transform-origin: 0 0;
  opacity: 0.1;
`;
const MaskGroupIcon1 = styled.img`
  position: absolute;
  top: 53px;
  left: 162px;
  width: 476.4px;
  height: 690.57px;
  object-fit: cover;
`;
const IllustrationInner = styled.img`
  position: absolute;
  top: 0px;
  left: 67px;
  border-radius: 50%;
  width: 230.89px;
  height: 230.89px;
  object-fit: cover;
`;
const EllipseIcon = styled.img`
  position: absolute;
  top: 216.66px;
  left: -87.76px;
  border-radius: 50%;
  width: 316.56px;
  height: 316.56px;
  object-fit: cover;
`;
const IllustrationChild1 = styled.img`
  position: absolute;
  top: -15.34px;
  left: 222.24px;
  border-radius: 50%;
  width: 249.69px;
  height: 249.69px;
  object-fit: cover;
`;
const Illustration2 = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 654.4px;
  height: 745.48px;
  text-align: left;
  font-size: 51.19px;
  color: var(--black);
  font-family: var(--font-poppins);
`;
const HoneymoonSpecials = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
`;
const OurRomanticTropical = styled.p`
  margin: 0;
  position: absolute;
  top: 28.56px;
  left: 0px;
  font-size: var(--font-size-31xl);
  line-height: 71.04px;
  font-weight: 700;
  font-family: var(--font-volkhov);
  color: var(--color-darkslateblue-100);
  display: inline-block;
  width: 583px;
  height: 142px;
`;
const ViewPackages = styled.div`
  position: relative;
  font-size: 16.72px;
  font-weight: 600;
  font-family: var(--font-poppins);
  color: var(--white);
  text-align: center;
`;
const ButtonSearch = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px 36.56597900390625px 9.402680397033691px 0px;
  background-color: var(--color-salmon);
  position: absolute;
  top: 324px;
  left: 0px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  width: 176.56px;
  height: 56.42px;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
const EtLaboreHarum = styled.p`
  margin: 0;
  position: absolute;
  top: 190px;
  left: 0px;
  font-size: var(--font-size-base);
  line-height: 26px;
  color: var(--black);
  display: inline-block;
  width: 583px;
  height: 103px;
`;
const Context1 = styled.section`
  position: absolute;
  top: 172px;
  left: 821px;
  width: 583px;
  height: 380.42px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-salmon);
  font-family: var(--font-poppins);
`;
const RomanticTropicalLand = styled.section`
  position: absolute;
  top: 1944px;
  left: 441px;
  width: 1404px;
  height: 745.48px;
`;
const Category = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 224px;
  font-weight: 600;
`;
const WeOfferBest = styled.p`
  margin: 0;
  position: absolute;
  top: 47px;
  left: 0px;
  font-size: var(--font-size-31xl);
  text-transform: capitalize;
  font-weight: 700;
  font-family: var(--font-volkhov);
  color: var(--color-darkslateblue-100);
`;
const Title = styled.section`
  position: absolute;
  top: 0px;
  left: 389px;
  width: 547px;
  height: 112px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-salmon);
  font-family: var(--font-poppins);
`;
const SuntQuiRepellat = styled.p`
  margin: 0;
  position: absolute;
  top: 156px;
  left: 0px;
  line-height: 26px;
  font-weight: 500;
  display: inline-block;
  width: 195px;
  height: 78px;
`;
const GuidedTours1 = styled.p`
  margin: 0;
  position: absolute;
  top: 114px;
  left: 30px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-heading-color);
`;
const GuidedToursChild = styled.img`
  position: absolute;
  top: 0px;
  left: 60px;
  width: 87px;
  height: 85px;
  object-fit: cover;
`;
const GuidedTours = styled.section`
  position: absolute;
  top: 35.09px;
  left: 0px;
  width: 195px;
  height: 234px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const GroupChild3 = styled.img`
  position: absolute;
  top: 247px;
  left: 0px;
  width: 100px;
  height: 100px;
`;
const GroupChild4 = styled.div`
  position: absolute;
  top: 0px;
  left: 35px;
  border-radius: 36px;
  background-color: var(--white);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
    0px 64.81481170654297px 46.85px rgba(0, 0, 0, 0.02),
    0px 38.51852035522461px 25.48px rgba(0, 0, 0, 0.01),
    0px 20px 13px rgba(0, 0, 0, 0.01),
    0px 8.148148536682129px 6.52px rgba(0, 0, 0, 0.01),
    0px 1.8518518209457397px 3.15px rgba(0, 0, 0, 0);
  width: 267px;
  height: 314px;
`;
const VectorParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 302px;
  height: 347px;
`;
const SuntQuiRepellat1 = styled.p`
  margin: 0;
  position: absolute;
  top: 191.09px;
  left: 70px;
  line-height: 26px;
  font-weight: 500;
  display: inline-block;
  width: 199px;
  height: 78px;
`;
const BestFlightsOptions = styled.p`
  margin: 0;
  position: absolute;
  top: 149.09px;
  left: 69px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-heading-color);
`;
const BestFlightOptionsSelectedChild = styled.img`
  position: absolute;
  top: 20.09px;
  left: 131.81px;
  width: 103.19px;
  height: 92px;
  object-fit: cover;
`;
const BestFlightOptionsSelected = styled.section`
  position: absolute;
  top: 0px;
  left: 333px;
  width: 302px;
  height: 347px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const ReligiousTours1 = styled.p`
  margin: 0;
  position: absolute;
  top: 102.91px;
  left: 16px;
  font-weight: 600;
`;
const SuntQuiRepellat2 = styled.p`
  margin: 0;
  position: absolute;
  top: 145px;
  left: 0px;
  font-size: var(--font-size-base);
  line-height: 26px;
  font-weight: 500;
  color: var(--text-clr);
  text-align: center;
  display: inline-block;
  width: 187px;
  height: 78px;
`;
const ReligiousToursChild = styled.img`
  position: absolute;
  top: 0px;
  left: 53px;
  width: 83px;
  height: 74px;
  object-fit: cover;
`;
const ReligiousTours = styled.section`
  position: absolute;
  top: 46.09px;
  left: 773px;
  width: 187px;
  height: 223px;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--text-heading-color);
  font-family: var(--font-poppins);
`;
const SuntQuiRepellat3 = styled.div`
  position: absolute;
  top: 148px;
  left: 1px;
  line-height: 26px;
  font-weight: 500;
  display: inline-block;
  width: 187px;
  height: 78px;
`;
const MedicalInsurance1 = styled.p`
  margin: 0;
  position: absolute;
  top: 106px;
  left: 0px;
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-heading-color);
`;
const MedicalInsuranceChild = styled.img`
  position: absolute;
  top: 0px;
  left: 58px;
  width: 86px;
  height: 76px;
  object-fit: cover;
`;
const MedicalInsurance = styled.section`
  position: absolute;
  top: 43.09px;
  left: 1094px;
  width: 188px;
  height: 226px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--text-clr);
  font-family: var(--font-poppins);
`;
const Services = styled.section`
  position: absolute;
  top: 132.91px;
  left: 0px;
  width: 1282px;
  height: 347px;
`;
const BestService = styled.section`
  position: absolute;
  top: 1286px;
  left: 320px;
  width: 1282px;
  height: 479.91px;
`;
const HeaderChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 976px;
  object-fit: cover;
`;
const VectorIcon6 = styled.img`
  position: absolute;
  top: 90px;
  left: 1024px;
  width: 11.6px;
  height: 7.48px;
`;
const PeopleBookedTommorowland = styled.p`
  margin: 0;
  position: absolute;
  top: 1.54px;
  left: 195.37px;
  line-height: 37.61px;
  font-weight: 500;
`;
const GroupChild5 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild6 = styled.img`
  position: absolute;
  top: 0px;
  left: 24.3px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild7 = styled.img`
  position: absolute;
  top: 0px;
  left: 48.6px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild8 = styled.img`
  position: absolute;
  top: 0px;
  left: 72.89px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild9 = styled.img`
  position: absolute;
  top: 0px;
  left: 97.19px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild10 = styled.img`
  position: absolute;
  top: 0px;
  left: 121.49px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const GroupChild11 = styled.img`
  position: absolute;
  top: 0px;
  left: 145.79px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  object-fit: cover;
`;
const EllipseParent = styled.section`
  position: absolute;
  top: 0.25px;
  left: 0px;
  width: 181.79px;
  height: 36px;
`;
const Div44 = styled.div`
  position: absolute;
  top: 0px;
  left: 160px;
  line-height: 37.61px;
  font-weight: 500;
`;
const Clients = styled.section`
  position: absolute;
  top: 403px;
  left: 0px;
  width: 568.37px;
  height: 39.54px;
  text-align: left;
  font-size: 12.54px;
  color: var(--white);
  font-family: var(--font-poppins);
`;
const Slogans = styled.p`
  margin: 0;
  position: absolute;
  top: 29px;
  left: 0px;
  line-height: 67.91px;
  font-weight: 700;
  display: inline-block;
  width: 631px;
  height: 272px;
`;
const SearcgingToolsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.22px;
  background-color: rgba(243, 243, 243, 0.6);
  backdrop-filter: blur(35.52px);
  width: 844px;
  height: 102px;
`;
const Submit = styled.div`
  position: absolute;
  top: calc(50% - 12.21px);
  left: calc(50% - 31.28px);
  font-size: 16.72px;
  font-weight: 600;
  font-family: var(--font-poppins);
  color: var(--white);
  text-align: center;
`;
const ButtonSearch1 = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: var(--color-salmon);
  position: absolute;
  top: 23px;
  left: 629px;
  border-radius: var(--br-3xs);
  box-shadow: 0px 20px 35px rgba(223, 105, 81, 0.15);
  width: 176.56px;
  height: 56.42px;
`;
const WhereTo = styled.input`
  border: none;
  font-family: var(--font-poppins);
  font-size: 18.81px;
  background-color: transparent;
  position: absolute;
  top: 39px;
  left: 22px;
  color: var(--white);
  text-align: left;
`;
const AkarIconschevronDown = styled.div`
  position: absolute;
  top: 39px;
  left: 374px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const SearcgingTools = styled.section`
  position: absolute;
  top: 273px;
  left: 11px;
  width: 844px;
  height: 102px;
`;
const GroupSelect = styled.select`
  position: absolute;
  top: 312px;
  left: 234px;
  width: 140px;
  height: 28px;
`;
const GroupSelect1 = styled.select`
  position: absolute;
  top: 312px;
  left: 473px;
  width: 112px;
  height: 28px;
`;
const ContextChild = styled.img`
  position: absolute;
  top: -0.03px;
  left: -2.34px;
  border-radius: 2.09px;
  width: 83.03px;
  height: 16.87px;
`;
const Context3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 855px;
  height: 375px;
`;
const Context2 = styled.section`
  position: absolute;
  top: 298px;
  left: 320px;
  width: 855px;
  height: 442.54px;
  text-align: left;
  font-size: 58.51px;
  color: var(--white);
  font-family: var(--font-poppins);
`;
const HeaderItem = styled.div`
  position: absolute;
  top: 600px;
  left: 499px;
  border-radius: var(--br-6xl);
  background-color: var(--color-lightgray);
  width: 3px;
  height: 48px;
`;
const HeaderInner = styled.div`
  position: absolute;
  top: 600px;
  left: 750px;
  border-radius: var(--br-6xl);
  background-color: var(--color-lightgray);
  width: 3px;
  height: 48px;
`;
const Home = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 0px;
  font-weight: 500;
  color: inherit;
  cursor: pointer;
`;
const About = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 97px;
  font-weight: 500;
  color: inherit;
`;
const Services1 = styled.p`
  margin: 0;
  position: absolute;
  top: 0px;
  left: 196px;
  font-weight: 500;
`;
const UpcommingPackages = styled.a`
  text-decoration: none;
  position: absolute;
  top: 0px;
  left: 312px;
  font-weight: 500;
  color: inherit;
`;
const NavElements = styled.ul`
  margin: 0;
  position: absolute;
  top: 18px;
  left: 0px;
  width: 485px;
  height: 22px;
`;
const GroupChild12 = styled.img`
  position: absolute;
  top: -15px;
  left: -35px;
  border-radius: var(--br-3xs);
  width: 222px;
  height: 128px;
`;
const GetInTouch = styled.div`
  position: absolute;
  top: 18px;
  left: 26px;
  font-size: var(--font-size-mid);
  font-weight: 500;
  font-family: var(--font-circular-std);
  color: var(--white);
  text-align: left;
`;
const VectorGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 152px;
  height: 58px;
`;
const SignIn = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 692px;
  width: 152px;
  height: 58px;
`;
const ActiveIndicator = styled.div`
  position: absolute;
  top: 44px;
  left: 8px;
  border-radius: 34px;
  background-color: var(--color-salmon);
  width: 30px;
  height: 3px;
`;
const NavBar = styled.div`
  position: absolute;
  top: 0px;
  left: 434px;
  width: 844px;
  height: 58px;
`;
const Logo1 = styled.div`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 126.6px;
  height: 64.18px;
  text-align: center;
  font-size: 31.62px;
  font-family: var(--font-volkhov);
`;
const TopNavBar = styled.section`
  position: absolute;
  top: 63px;
  left: 321px;
  width: 1278px;
  height: 67.18px;
  text-align: left;
  font-size: var(--font-size-mid);
  color: var(--white);
  font-family: var(--font-circular-std);
`;
const ScrollChild = styled.div`
  position: absolute;
  top: 98px;
  left: 115px;
  border-radius: 50%;
  border: 1px dashed var(--white);
  box-sizing: border-box;
  width: 162px;
  height: 162px;
`;
const ScrollItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  border: 1px dashed var(--white);
  box-sizing: border-box;
  width: 392px;
  height: 392px;
`;
const Scroll1 = styled.div`
  position: absolute;
  top: 139px;
  left: 172px;
  font-weight: 300;
`;
const Scroll2 = styled.div`
  position: absolute;
  top: 793px;
  left: 28px;
  width: 392px;
  height: 392px;
`;
const GroupChild13 = styled.div`
  position: absolute;
  top: 0px;
  left: 48.25px;
  border-radius: var(--br-20xl);
  background-color: var(--color-salmon);
  width: 31.25px;
  height: 1.95px;
`;
const GroupChild14 = styled.div`
  position: absolute;
  top: 0px;
  left: 96.5px;
  border-radius: var(--br-20xl);
  background-color: var(--white);
  width: 31.25px;
  height: 1.95px;
`;
const GroupChild15 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-20xl);
  background-color: var(--white);
  width: 31.25px;
  height: 1.95px;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 919.02px;
  left: 896px;
  width: 127.75px;
  height: 1.95px;
`;
const Header = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  height: 1185px;
  text-align: center;
  font-size: var(--font-size-lg);
`;
const MaskGroupIcon2 = styled.img`
  position: absolute;
  top: 75px;
  left: 837.39px;
  width: 160.47px;
  height: 50px;
  object-fit: cover;
`;
const MaskGroupIcon3 = styled.img`
  position: absolute;
  top: 75px;
  left: 493.39px;
  width: 165px;
  height: 50px;
  object-fit: cover;
`;
const MaskGroupIcon4 = styled.img`
  position: absolute;
  top: 74px;
  left: 1176.85px;
  width: 172px;
  height: 50px;
  object-fit: cover;
`;
const Image912Icon = styled.img`
  position: absolute;
  top: 75px;
  left: 1527.85px;
  width: 221px;
  height: 50px;
  object-fit: cover;
  opacity: 0.44;
`;
const Image909Icon = styled.img`
  position: absolute;
  top: 75px;
  left: 171px;
  width: 143.39px;
  height: 50px;
  object-fit: cover;
  opacity: 0.44;
`;
const Partners = styled.section`
  position: absolute;
  top: 1020px;
  left: 57px;
  background-color: #f7f7f7;
  width: 1920px;
  height: 200px;
  overflow: hidden;
`;
const UnionIcon = styled.img`
  position: relative;
  width: 229px;
  height: 188px;
`;
const HoneymoonPackages1 = styled.div`
  position: absolute;
  top: 43px;
  left: 16px;
`;
const ToursPackages = styled.div`
  position: absolute;
  top: 78px;
  left: 16px;
`;
const BuildPackage = styled.div`
  position: absolute;
  top: 148px;
  left: 16px;
`;
const MusicalEvents = styled.div`
  position: absolute;
  top: 113px;
  left: 16px;
`;
const Services2 = styled.div`
  position: absolute;
  top: 109px;
  left: 935px;
  backdrop-filter: blur(15px);
  width: 229px;
  height: 188px;
  font-size: var(--font-size-sm);
`;
const HomepageRoot = styled.div`
  position: relative;
  background-color: var(--white);
  width: 100%;
  height: 4018px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--white);
  font-family: var(--font-poppins);
`;
const Homepage = () => {
  const onHomeClick = useCallback(() => {
    window.open("https://goggle.com");
  }, []);

  return (
    <HomepageRoot>
      <Footer>
        <FooterImgIcon alt="" src="/footer-img@2x.png" />
        <Footer1>
          <CopyrightXpro>
            Copyright @ Xpro 2022. All Rights Reserved.
          </CopyrightXpro>
          <FooterChild />
          <NavWrapParent>
            <NavWrap>
              <NavListItem company>
                <Company>Company</Company>
                <AboutUsParent>
                  <AboutUs>About Us</AboutUs>
                  <AboutUs career>Careers</AboutUs>
                  <AboutUs blog>Blog</AboutUs>
                  <AboutUs pricing>Pricing</AboutUs>
                </AboutUsParent>
              </NavListItem>
              <NavListItem1 destination>
                <Company>Destinations</Company>
                <MaldivesParent>
                  <AboutUs maldives>Maldives</AboutUs>
                  <AboutUs id="maldives">Los Angelas</AboutUs>
                  <AboutUs id="maldives">Las Vegas</AboutUs>
                  <AboutUs id="maldives">Torronto</AboutUs>
                </MaldivesParent>
              </NavListItem1>
              <NavListItem2 id="join">
                <JoinOurNewsletter>Join Our Newsletter</JoinOurNewsletter>
                <NavListItemInner>
                  <RectangleParent>
                    <GroupChild type="text" />
                    <YourEmailAddress>Your email address</YourEmailAddress>
                    <GroupItem />
                    <Subscribe>Subscribe</Subscribe>
                  </RectangleParent>
                </NavListItemInner>
                <WillSendYouContainer>
                  <WillSendYou>
                    * Will send you weekly updates for your better
                  </WillSendYou>
                  <WillSendYou>tour packages.</WillSendYou>
                </WillSendYouContainer>
              </NavListItem2>
            </NavWrap>
            <TravelHelpsCompaniesManageParent>
              <TravelHelpsCompanies>
                Travel helps companies manage payments easily.
              </TravelHelpsCompanies>
              <MessengerParent>
                <Messenger href="www.google.com" target="_blank">
                  <VectorIcon alt="" src="/vector.svg" />
                </Messenger>
                <Linkedin href="www.google.com" target="_blank">
                  <VectorIcon1 alt="" src="/vector1.svg" />
                  <VectorIcon2 alt="" src="/vector2.svg" />
                  <VectorIcon3 alt="" src="/vector3.svg" />
                </Linkedin>
                <Twitter target="_blank">
                  <VectorIcon4 alt="" src="/vector4.svg" />
                </Twitter>
                <Twoo target="_blank">
                  <VectorIcon5 alt="" src="/vector5.svg" />
                </Twoo>
              </MessengerParent>
            </TravelHelpsCompaniesManageParent>
          </NavWrapParent>
          <Logo>
            <Travel>Travel</Travel>
            <LogoChild alt="" src="/arrow-05.svg" />
          </Logo>
        </Footer1>
      </Footer>
      <BookATrip id="booking">
        <Illustration id="TripDiv">
          <BackgroundElement>
            <Div>+</Div>
            <Div1>+</Div1>
            <Div2>+</Div2>
            <Div3>+</Div3>
            <Div4>+</Div4>
            <Div5>+</Div5>
            <Div6>+</Div6>
            <Div7>+</Div7>
            <Div8>+</Div8>
            <Div9>+</Div9>
            <Div10>+</Div10>
            <Div11>+</Div11>
            <Div12>+</Div12>
            <Div13>+</Div13>
            <Div14>+</Div14>
            <Div15>+</Div15>
            <Div16>+</Div16>
            <Div17>+</Div17>
            <Div18>+</Div18>
            <Div19>+</Div19>
            <Div20>+</Div20>
            <Div21>+</Div21>
          </BackgroundElement>
          <Image872Icon alt="" src="/image-872@2x.png" />
          <Illustration1>
            <IllustrationChild alt="" src="/group-589.svg" />
            <Image1>
              <RectangleGroup>
                <GroupInner />
                <OptionsIcon alt="" src="/options.svg" />
                <Building1Icon alt="" src="/building-1.svg" />
                <PeopleAreInterested>
                  60 people are interested
                </PeopleAreInterested>
                <June>14-29 June</June>
                <ByJrMartinax>by JR Martinax</ByJrMartinax>
                <RectangleIcon alt="" src="/rectangle-17@2x.png" />
                <TripToHawaii>{`Trip to Hawaii `}</TripToHawaii>
                <LineDiv />
              </RectangleGroup>
              <RectangleContainer>
                <RectangleDiv />
                <TripToRome>Trip to rome</TripToRome>
                <Completed>
                  <Span>40%</Span>
                  <Completed1> completed</Completed1>
                </Completed>
                <EllipseDiv />
                <MaskGroupIcon alt="" src="/mask-group@2x.png" />
                <Ongoing>Ongoing</Ongoing>
                <GroupDiv>
                  <GroupChild1 />
                  <GroupChild2 />
                </GroupDiv>
              </RectangleContainer>
              <Heart61 alt="" src="/heart-6-1.svg" />
            </Image1>
          </Illustration1>
        </Illustration>
        <Context id="righBooking">
          <Heading>
            <Heading1>
              <GetYourFavourite>Get Your Favourite</GetYourFavourite>
              <GetYourFavourite>Resort Bookings</GetYourFavourite>
            </Heading1>
            <Subheading>{`Fast & Easy`}</Subheading>
          </Heading>
          <Values id="destinationDiv">
            <Value01 id="des1">
              <Value01Child alt="" src="/group-7@2x.png" />
              <ChooseDestination>Choose Destination</ChooseDestination>
              <LoremIpsumDolorContainer>
                <WillSendYou>{`Lorem ipsum dolor sit amet, consectetur `}</WillSendYou>
                <WillSendYou>{`adipiscing elit. Urna, tortor tempus. `}</WillSendYou>
              </LoremIpsumDolorContainer>
            </Value01>
            <Value03>
              <Value03Child alt="" src="/group-11.svg" />
              <LoremIpsumDolorContainer1>
                <WillSendYou>{`Lorem ipsum dolor sit amet, consectetur `}</WillSendYou>
                <WillSendYou>{`adipiscing elit. Urna, tortor tempus. `}</WillSendYou>
              </LoremIpsumDolorContainer1>
              <ChooseDestination>Let’s Go</ChooseDestination>
            </Value03>
            <Value02>
              <LoremIpsumDolorContainer>
                <WillSendYou>{`Lorem ipsum dolor sit amet, consectetur `}</WillSendYou>
                <WillSendYou>{`adipiscing elit. Urna, tortor tempus. `}</WillSendYou>
              </LoremIpsumDolorContainer>
              <ChooseDestination>Check Availability</ChooseDestination>
              <Value02Child alt="" src="/group-12.svg" />
            </Value02>
          </Values>
        </Context>
      </BookATrip>
      <BackgroundElement1>
        <Div22>+</Div22>
        <Div23>+</Div23>
        <Div24>+</Div24>
        <Div25>+</Div25>
        <Div26>+</Div26>
        <Div27>+</Div27>
        <Div28>+</Div28>
        <Div29>+</Div29>
        <Div30>+</Div30>
        <Div31>+</Div31>
        <Div32>+</Div32>
        <Div33>+</Div33>
        <Div34>+</Div34>
        <Div35>+</Div35>
        <Div36>+</Div36>
        <Div37>+</Div37>
        <Div38>+</Div38>
        <Div39>+</Div39>
        <Div40>+</Div40>
        <Div41>+</Div41>
        <Div42>+</Div42>
        <Div43>+</Div43>
      </BackgroundElement1>
      <RomanticTropicalLand id="tropicalDiv">
        <Illustration2 id="romanticalDiv">
          <IllustrationItem alt="" src="/rectangle-10.svg" />
          <HoneymoonPackages>Honeymoon Packages</HoneymoonPackages>
          <MaskGroupIcon1 alt="" src="/mask-group1@2x.png" />
          <IllustrationInner alt="" src="/ellipse-1@2x.png" />
          <EllipseIcon alt="" src="/ellipse-2@2x.png" />
          <IllustrationChild1 alt="" src="/ellipse-3@2x.png" />
        </Illustration2>
        <Context1 id="tropicalRight">
          <HoneymoonSpecials>Honeymoon Specials</HoneymoonSpecials>
          <OurRomanticTropical>
            Our Romantic Tropical Destinations
          </OurRomanticTropical>
          <ButtonSearch id="packageBtn">
            <ViewPackages>View Packages</ViewPackages>
          </ButtonSearch>
          <EtLaboreHarum>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus illum aut optio quibusdam!
          </EtLaboreHarum>
        </Context1>
      </RomanticTropicalLand>
      <BestService id="category">
        <Title>
          <Category>CATEGORY</Category>
          <WeOfferBest>We Offer Best Services</WeOfferBest>
        </Title>
        <Services>
          <GuidedTours id="cardOne">
            <SuntQuiRepellat>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </SuntQuiRepellat>
            <GuidedTours1>Guided Tours</GuidedTours1>
            <GuidedToursChild alt="" src="/group-1000001690@2x.png" />
          </GuidedTours>
          <BestFlightOptionsSelected id="CardTwo">
            <VectorParent>
              <GroupChild3 alt="" src="/rectangle-157.svg" />
              <GroupChild4 />
            </VectorParent>
            <SuntQuiRepellat1>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </SuntQuiRepellat1>
            <BestFlightsOptions>Best Flights Options</BestFlightsOptions>
            <BestFlightOptionsSelectedChild
              alt=""
              src="/group-1000001691@2x.png"
            />
          </BestFlightOptionsSelected>
          <ReligiousTours id="CardThree">
            <ReligiousTours1>Religious Tours</ReligiousTours1>
            <SuntQuiRepellat2>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </SuntQuiRepellat2>
            <ReligiousToursChild alt="" src="/group-1000001692@2x.png" />
          </ReligiousTours>
          <MedicalInsurance id="CardFour">
            <SuntQuiRepellat3>
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </SuntQuiRepellat3>
            <MedicalInsurance1>Medical insurance</MedicalInsurance1>
            <MedicalInsuranceChild alt="" src="/group-1000001693@2x.png" />
          </MedicalInsurance>
        </Services>
      </BestService>
      <Header>
        <HeaderChild alt="" src="/rectangle-19290@2x.png" />
        <VectorIcon6 alt="" src="/vector6.svg" />
        <Context2 id="heroSection">
          <Clients id="eventDiv">
            <PeopleBookedTommorowland id="eventPtag">
              2,500 people booked Tommorowland Event in last 24 hours
            </PeopleBookedTommorowland>
            <EllipseParent id="hroMiniImaes">
              <GroupChild5 alt="" src="/ellipse-31@2x.png" />
              <GroupChild6 alt="" src="/ellipse-32@2x.png" />
              <GroupChild7 alt="" src="/ellipse-33@2x.png" />
              <GroupChild8 alt="" src="/ellipse-34@2x.png" />
              <GroupChild9 alt="" src="/ellipse-35@2x.png" />
              <GroupChild10 alt="" src="/ellipse-36@2x.png" />
              <GroupChild11 alt="" src="/ellipse-37@2x.png" />
            </EllipseParent>
            <Div44>+</Div44>
          </Clients>
          <Context3>
            <Slogans id="HeroText">
              No matter where you’re going to, we’ll take you there
            </Slogans>
            <SearcgingTools id="HeroTravelSection">
              <SearcgingToolsChild />
              <ButtonSearch1 id="heroBtn">
                <Submit>Submit</Submit>
              </ButtonSearch1>
              <WhereTo type="text" placeholder="Where to?" />
              <AkarIconschevronDown />
            </SearcgingTools>
            <GroupSelect />
            <GroupSelect1 />
            <ContextChild alt="" src="/vector-1.svg" />
          </Context3>
        </Context2>
        <HeaderItem id="hrDiv" />
        <HeaderInner id="hrDiv2" />
        <TopNavBar id="topNav">
          <NavBar id="topNavRightSide">
            <NavElements id="navigation">
              <Home
                href="https://google.com"
                target="_blank"
                onClick={onHomeClick}
              >
                Home
              </Home>
              <About href="#" target="_blank">
                About
              </About>
              <Services1 id="service">Services</Services1>
              <UpcommingPackages>Upcomming Packages</UpcommingPackages>
            </NavElements>
            <SignIn id="getInTouch">
              <VectorGroup>
                <GroupChild12 alt="" src="/rectangle-12.svg" />
                <GetInTouch>Get in Touch</GetInTouch>
              </VectorGroup>
            </SignIn>
            <ActiveIndicator />
          </NavBar>
          <Logo1 id="TravelLogo">
            <Travel>Travel</Travel>
            <LogoChild alt="" src="/arrow-051.svg" />
          </Logo1>
        </TopNavBar>
        <Scroll2>
          <ScrollChild />
          <ScrollItem />
          <Scroll1>Scroll</Scroll1>
        </Scroll2>
        <RectangleParent1>
          <GroupChild13 />
          <GroupChild14 />
          <GroupChild15 />
        </RectangleParent1>
      </Header>
      <Partners id="partnersDiv">
        <MaskGroupIcon2 alt="" src="/mask-group2@2x.png" />
        <MaskGroupIcon3 alt="" src="/mask-group3@2x.png" />
        <MaskGroupIcon4 alt="" src="/mask-group4@2x.png" />
        <Image912Icon alt="" src="/image-912@2x.png" />
        <Image909Icon alt="" src="/image-909@2x.png" />
      </Partners>
      <Services2>
        <UnionIcon alt="" src="/union.svg" />
        <HoneymoonPackages1>Honeymoon Packages</HoneymoonPackages1>
        <ToursPackages>Tours Packages</ToursPackages>
        <BuildPackage>Build Package</BuildPackage>
        <MusicalEvents>Musical Events</MusicalEvents>
      </Services2>
    </HomepageRoot>
  );
};

export default Homepage;
