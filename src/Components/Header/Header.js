import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";

const Header = ({ handleLoginClick, handleCurrencyClick }) => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  

  const handleClick = () => {
    handleLoginClick();
  };
  const handleCurrency = () => {
    handleCurrencyClick();
  };
  return (
    <>
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
            {/* <li>
              <span>LOGOUT</span>
            </li> */}
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
      </div>
    </>
  );
};

export default Header;
