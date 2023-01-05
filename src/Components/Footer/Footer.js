import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import usp1 from "../../Assests/Images/usp1.webp";
import ship from "../../Assests/Images/ship.webp";
import express from "../../Assests/Images/express.webp";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { TiSocialInstagram } from "react-icons/ti";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Button, styled, Input } from "@mui/material";

const ButtonWrapper = styled(Button)`
  border-radius: 0;
  background-color: #181818;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  width: 50%;
  height: 5rem;

  &:hover {
    background-color: #424649;
  }
  &:focus {
    background-color: #181818;
  }
`;
const InputWrap = styled(Input)`
  border: none;
  height: 5rem;

  &:focus {
    border: .1rem solid lightgray;
  }
`;

const Button2 = styled(Button)`
  border-radius: 0;
  border: .1rem solid gray;
  color: black;
  height: 5rem;
  width: 11rem;
  text-transform: none;

  &:hover {
    background-color: #424649;
    border: .1rem solid gray;
  }
`;

 export const FirstFooter = () => {
  return (
    <>
      <div className="policy-section">
        <div className="row">
          <div className="col-md-1">
            <img src={usp1} alt="policy" />
          </div>
          <div className="col-md-3">
            <div className="text-wrapper">
              <h6>100% ORIGINAL</h6>
              <p>
                All products are original and go through strict quality check.
              </p>
            </div>
          </div>

          <div className="col-md-1">
            <img src={ship} alt="policy" />
          </div>
          <div className="col-md-3">
            <div className="text-wrapper">
              <h6>7 DAY RETURN</h6>
              <p>Use our hassle free method to return.</p>
            </div>
          </div>

          <div className="col-md-1">
            <img src={express} alt="policy" />
          </div>
          <div className="col-md-3">
            <div className="text-wrapper">
              <h6>SHIPPING</h6>
              <p>
                Shipping in India is free. Shipping charges applicable for
                International locations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <h2>FIND A STORE NEAR YOU</h2>
        <div className="location-wrapper">
          <ButtonWrapper variant="contained">
            <LocationOnOutlinedIcon /> Use my current location
          </ButtonWrapper>
          <InputWrap placeholder="Enter Pincode or City name" style={{fontSize: '1.4rem'}}></InputWrap>
          <Button2 variant="outlined" style={{fontSize: '1.4rem'}}>Search</Button2>
        </div>
      </div>
      <div className="conclusion">
        <h6>TITAN ONLINE FASHION STORE FOR ALL</h6>
        <p>
          Walk into the cosmos of fashion with TITAN, a one stop online fashion
          destination. Our exhaustive collection Is inspired by international
          fashion and latest trend style. Over the years, TITAN has been
          tremendously successful in making online shopping much convenient and
          enjoyable with wide product range starting from watches, wall clocks
          to wallets, belts and straps. With a user-friendly shopping
          experience, TITAN aims to fulfil your wishes and deliver your products
          in fastest time possible. Experience the best in class online shopping
          with services such as Cash on Delivery, free shipping and seamless
          return/exchange policies.
        </p>
        <Link to='/know'>Know More</Link>
      </div>
    </>
  )
}

const Footer = () => {
  return (
    <div>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <ul>
                  <li>
                    <h6>CUSTOMER SERVICE</h6>
                  </li>
                  <li>
                    <Link to="/payment">Payment Options</Link>
                  </li>
                  <li>
                    <Link to="/track">Track Order</Link>
                  </li>
                  <li>
                    <Link to="/program">Encircle Program</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <ul>
                  <li>
                    <h6>CONTACT US</h6>
                  </li>
                  <li>
                    <Link to="/phone">1800-266-0123</Link>
                  </li>
                  <li>
                    <Link to="/customer">customercare@titan.co.in</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <ul>
                  <li>
                    <h6>POLICIES</h6>
                  </li>
                  <li>
                    <Link to="/return">Returns & Exchanges</Link>
                  </li>
                  <li>
                    <Link to="/cancel">Cancellation</Link>
                  </li>
                  <li>
                    <Link to="/shipping">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/delivery">Delivery Information</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <ul>
                  <li>
                    <h6>ABOUT TITAN</h6>
                  </li>
                  <li>
                    <Link to="/"> Corporate</Link>
                  </li>
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 hidden-xs">
            <h6 className="text-footer">DOWNLOAD WORLD OF TITAN APP</h6>
            <div className="row row-img">
              <div className="col-md-4 col-sm-6">
                <Link>
                  {" "}
                  <img
                    src="https://www.titan.co.in/wps/wcm/connect/titanrt/2872109e-ec2b-4cd4-9aaa-da1cdb6c178a/apple.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-2872109e-ec2b-4cd4-9aaa-da1cdb6c178a-o4kbu2G"
                    alt="img"
                  />
                </Link>
              </div>
              <div className="col-md-4 col-sm-6 col-6">
                <Link>
                  <img
                    src="https://www.titan.co.in/wps/wcm/connect/titanrt/04d9f47d-609c-4da5-a7b8-bae40d394059/google-play-badge.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-04d9f47d-609c-4da5-a7b8-bae40d394059-o4twnL6"
                    alt="img"
                    className="google-play"
                  />
                </Link>
              </div>

              <div className="col-md-5">
                <p style={{ marginTop: 25 }}>FOLLOW US WITH</p>
              </div>
              <div className="col-md-5 icons">
                <p style={{ marginTop: 25 }}>
                  <Link>
                    <FaFacebookF style={{ color: "white" }} size={20} />
                  </Link>
                  <Link>
                    
                    <BsTwitter style={{ color: "white" }} size={20} />
                  </Link>
                  <Link>
                    <TiSocialInstagram style={{ color: "white" }} size={20} />
                  </Link>
                  <Link>
                    <FaPinterestP style={{ color: "white" }} size={20} />
                  </Link>
                </p>
              </div>
              <div className="whatsapp">
                <p style={{ marginTop: 0 }}>
                  Want Help?{" "}
                  <Link style={{ color: "white", fontWeight: "bold" }}>
                    Click Here
                  </Link>
                  to chat with us on &nbsp;
                  <img
                    src="https://staticimg.titan.co.in/Common_Assets/Logo/WhatsApp_Logo.png"
                    alt="logo"
                    style={{ height: 23 }}
                  />
                </p>
                <p style={{ marginTop: 0 }}>
                  Operating Hours: 10:00AM to 10:00PM Monday to Sunday
                </p>
              </div>
            </div>
          </div>
          <hr style={{ color: "gray" }} />

          <div className="row">
            <div className="col-md-2 terms">
              <p>TERMS & CONDITIONS</p>
            </div>
            <div className="col-md-2 terms">
              <p>PRIVACY POLICIES</p>
            </div>
            <div className="col-md-2 terms">
              <p>WEARABLES PRIVACY POLICIES</p>
            </div>
            <div className="col-md-4 terms">
              <p style={{ fontSize: "12px" }}>
               
                © 2022 Titan Company Limited. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-9 col-sm-6">
              <img
                src="https://staticimg.titan.co.in/Common_Assets/Logo/titan-dt-footer.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
