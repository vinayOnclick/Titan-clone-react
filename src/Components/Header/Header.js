import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../Assests/Images/Titan-Logo-PNG.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = ({ handleLoginClick, handleCurrencyClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = () => {
    handleLoginClick();
  };
  const handleCurrency = () => {
    handleCurrencyClick();
  };
  return (
    <div>
      <div className="navbar">
        <div className="navbar-left">
          <ul>
            <li>
              <Link to="/brands">BRANDS</Link>
            </li>
            <li>
              <Button onClick={handleCurrency} className="currency">
                CURRENCY SELECTOR
                <KeyboardArrowDownIcon />
              </Button>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <span onClick={handleClick}>LOGIN</span>
            </li>
            <li>
              <Link to="/book">BOOK AN APPOINTMENT</Link>
            </li>
            <li>
              <Link to="/encircle">ENCIRCLE</Link>
            </li>
            <li>
              <Link to="/wishlist">WISHLIST</Link>
            </li>
            <li>
              <Link to="/cart">CART({cartTotalQuantity})</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="toggle-icon">
        {/* {showMenu ? (
          <>
            <RxCross2 onClick={handleMenuClick} />

             <div className="header-nav">
              <ul>
                <li>
                  <Link to="/">WATCHES</Link>
                </li>
                <li>
                  <Link to="/">PREMUIM WATCHES</Link>
                </li>
                <li>
                  <Link to="/">NEW ARRIVALS</Link>
                </li>
                <li>
                  <Link to="/">SMART</Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={Logo} alt="logo" className="logo" />
                  </Link>
                </li>
                <li>
                  <Link to="/">CLOCK</Link>
                </li>
                <li>
                  <Link to="/">ACCESSORIES</Link>
                </li>
                <li>
                  <Link to="/">OUR BRANDS</Link>
                </li>
              </ul>
            </div>
           
          </>
        ) : (
          <RxHamburgerMenu onClick={handleMenuClick} />
        )} */}
      </div>
    </div>
  );
};

export default Header;
