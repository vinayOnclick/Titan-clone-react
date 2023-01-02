import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { ToggleButton } from "@mui/material";
import Logo2 from "../../Assests/Images/Logo.svg";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [showToggle, setShowToggle] = useState(false);

  const handleClick = () => {
    setShowToggle(!showToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  let stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };

  return (
    <div>
      <div className={`h-20 w-full bg-light ${stickyClass} sticky-nav`}>
      <div className="toggle-menu-section">
      <MenuIcon onClick={handleClick} className='toggle-btn'/>
           <img src={Logo2} alt="logo" className="logo2" /> 
      </div>
        
        {showToggle ? (
          <div className="navbar-header">
            <ul>
            <li>
              <Link to="/brands">BRANDS</Link>
            </li><hr/>
            <li>
              <span onClick={handleClick}>LOGIN</span>
            </li><hr/>
            <li>
              <Link to="/book">BOOK AN APPOINTMENT</Link>
            </li><hr/>
            <li>
              <Link to="/encircle">ENCIRCLE</Link>
            </li><hr/>
            <li>
              <Link to="/wishlist">WISHLIST</Link>
            </li><hr/>
            <li>
              <Link to="/cart">CART</Link>
            </li><hr/>
              <li>
                <Link to="/">WATCHES</Link>
              </li><hr/>
              <li>
                <Link to="/">PREMUIM WATCHES</Link>
              </li><hr/>
              <li>
                <Link to="/">NEW ARRIVALS</Link>
              </li><hr/>
              <li>
                <Link to="/">SMART</Link>
              </li><hr/>
              <li>
                <Link to="/">CLOCK</Link>
              </li><hr/>
              <li>
                <Link to="/">ACCESSORIES</Link>
              </li><hr/>
              <li>
                <Link to="/">OUR BRANDS</Link>
              </li><hr/>
              
            </ul>
          </div>
        ) : null}
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
