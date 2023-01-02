import React, { useState } from "react";
import "./MainHeader.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assests/Images/Titan-Logo-PNG.png";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, styled, TextField } from "@mui/material";
import { Modal, ModalBody } from "reactstrap";

const SearchContainer = styled(Box)`
  border-bottom: 1px solid lightgray;
  padding: 5px;
  margin-left: 25px;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled(TextField)`
  border: none;
  color: lightgray;
  font-size: 15px;
`;
const Search = styled(SearchIcon)`
  font-size: 25px;
  color: black;
`;

const MainHeader = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMouseOver2 = () => {
    setHovering(true);
  };
  const handleMouseOut2 = () => {
    setHovering(false);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleLocation = () => {
    setShowLocation(!showLocation);
  };

  return (
    <Box>
      <div className="header-nav">
        <ul>
          <li>
            <Link
              to="/watches"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              WATCHES
            </Link>
          </li>
          <li>
            <Link
              to="/premuim"
              onMouseOver={handleMouseOver2}
              onMouseOut={handleMouseOut2}
            >
              PREMUIM WATCHES
            </Link>
          </li>
          <li>
            <Link to="/new">NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/smart">SMART</Link>
          </li>
          <li>
            <Link to="/">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/clock">CLOCK</Link>
          </li>
          <li>
            <Link to="/accessories">ACCESSORIES</Link>
          </li>
          <li>
            <Link to="/our-brands">OUR BRANDS</Link>
          </li>
          <li>
            <Link
              to="/"
              className="wedding"
              style={{
                color: "rgb(248, 80, 80)",
                fontStyle: "italic",
                fontSize: "16px",
              }}
            >
              Wedding Gifts
            </Link>
          </li>
          <LocationOnOutlinedIcon onClick={handleLocation} style={{width: '2.2rem'}}/>
          {!showLocation ? <div>FIND A STORE OR SERVICE CENTER</div> : null}
          <Search onClick={handleSearch} />
          {!showSearch ? (
            <>
            <Modal>
              <ModalBody>
                9oibfyt
              </ModalBody>
            </Modal>
            <SearchContainer>
              <Input
                id="standard-basic"
                label="Search Our Products"
                variant="standard" 
                className="search-container"
              />
              <SearchIcon />
              
              <div className='search-section'>
                <div className="left-section">
                  YOUR RECENT SEARCHES
                </div>
                <div className="right-section">
                  POPULAR PRODUCTS
                </div>
              </div>
            </SearchContainer></>
          ) : null}
        </ul>
      </div>
      {isHovering ? (
        <div className="watches-section">
          <div className="row para-text">
            <div className="col-md-3 ">
              <h4>SHOP FOR</h4>
              <Link to ='/women-watch' style={{color: 'black'}}>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/38ff8703-a914-4086-b39d-4f6da09497f8/Watch_Icons_160x160-Women+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-38ff8703-a914-4086-b39d-4f6da09497f8-oaym6nS"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                WOMEN
              </Link>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/66d6a0e5-2d24-4b00-8328-2dbf2d1c066a/Watch_Icons_160x160-Men+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-66d6a0e5-2d24-4b00-8328-2dbf2d1c066a-oaymqcm"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                MEN
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/f43496b3-b27c-47a2-930f-358e1e4ab5a3/Watch_Icons_160x160-Kids+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-f43496b3-b27c-47a2-930f-358e1e4ab5a3-oaymxLg"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                KIDS
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/13ca0a6e-163d-4cd6-8371-ceab95361ef0/Watch_Icons_160x160-Couple+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-13ca0a6e-163d-4cd6-8371-ceab95361ef0-oaymFef"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                COUPLES
              </p>
            </div>
            <div className="col-md-3">
              <h4>SHOP BY TYPE</h4>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/e2a7f1dd-0cad-406c-b7da-83b6f71d859d/Watch_Icons_160x160-Automatic+%282%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-e2a7f1dd-0cad-406c-b7da-83b6f71d859d-oaynn1."
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                MECHANICAL
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/dd0c1d52-e8fc-43d2-b7f8-c65b589c5768/Watch_Icons_160x160-LeatherStrap+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-dd0c1d52-e8fc-43d2-b7f8-c65b589c5768-oaynx6U"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                LEATHER STRAP
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/a6c9713c-c911-49e0-a7a5-57757cf9d7c1/Watch_Icons_160x160-MetalStrap+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-a6c9713c-c911-49e0-a7a5-57757cf9d7c1-oaynEEQ"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                METAL STRAP
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/a0414d9a-4693-4a0b-ac5b-8905d7c15ae6/Watch_Icons_160x160-Minimalist+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-a0414d9a-4693-4a0b-ac5b-8905d7c15ae6-oayon5v"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                MINIMALIST
              </p>
            </div>
            <div className="col-md-3">
              <h4>SHOP BY COLLECTION</h4>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/1e46f369-f090-485a-a978-313fd31bd9e1/Watch_Icons_180x180-Minimals_Alt+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-1e46f369-f090-485a-a978-313fd31bd9e1-oayovt."
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                MINIMALS
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/791a31c9-3c90-422d-9067-320a2a619a07/Watch_Icons_160x160-MoJ+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-791a31c9-3c90-422d-9067-320a2a619a07-oayoEul"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                RAGA
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/efa34c71-c5d8-40ec-9d9a-ab54059e0f10/Watch_Icons_180x180-Solidarity+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-efa34c71-c5d8-40ec-9d9a-ab54059e0f10-oayoMVP"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                CIRCLE OF SOLIDARITY
              </p>
              <p>
                <img
                  src="https://www.titan.co.in/wps/wcm/connect/titanrt/a59ea0dd-c150-4d5f-bfc4-3f85d3525034/Watch_Icons_160x160-Animalia+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-a59ea0dd-c150-4d5f-bfc4-3f85d3525034-oayoT.y"
                  alt="img"
                  style={{ width: "6rem", height: "5rem" }}
                />
                ANIMALIA
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2">
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/ca0b3c26-b681-4c8a-9b8e-4de421772a33/450x656_Ti_Talk.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-ca0b3c26-b681-4c8a-9b8e-4de421772a33-ogp5pat"
                alt="img"
                className="watch-banner"
              />
            </div>
          </div>
        </div>
      ) : null}

      {hovering ? (
        <div className="premium-section">
          <div className="row">
            <div className="col-md-3">
              <h4>NEBULA 18K GOLD WATCHES</h4>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titan/56ecaec1-d35b-4854-a45a-8b8b6a4a96a3/Image_Crop_1-min.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-56ecaec1-d35b-4854-a45a-8b8b6a4a96a3-nzOTRsl"
                alt="img"
                style={{ width: "100%", height: "40%" }}
              />

              <p>JEWELS</p>
              <p>LUSTRE</p>
              <p>DECCAN TREASURES</p>
              <p>CALLIGRAPHY</p>
              <p>VIEW ALL</p>
            </div>
            <div className="col-md-3">
              <h4>XYLYS SWISS MADE WATCHES</h4>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/b5dd43fb-aea8-42d9-b53f-11905db05bc6/Image_Crop_3-min+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-b5dd43fb-aea8-42d9-b53f-11905db05bc6-oayp1l-"
                alt="img"
                style={{ width: "100%", height: "40%" }}
              />

              <p>METEORITE</p>
              <p>CARBON FIBER</p>
              <p>LADIES CERAMIC</p>
              <p>CHRONO & MULTIFUNCTIONS</p>
              <p>VIEW ALL</p>
            </div>
            <div className="col-md-3">
              <h4>EDGE</h4>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/bda5f983-8ddf-4dec-9cf5-fef68835c380/Image_Crop_2-min+%281%29.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-bda5f983-8ddf-4dec-9cf5-fef68835c380-oayp9WR"
                alt="img"
                style={{ width: "100%", height: "40%" }}
              />

              <p>EDGE MECHANICAL</p>
              <p>EDGE CERAMIC</p>
              <p>CLASSICS</p>
              <p>EDGE ZEN</p>
              <p>VIEW ALL</p>
            </div>
            <div className="col-md-3">
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titan/844356e0-b759-4866-bc89-3e86bbd49c12/450x694_Midnight.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OO8010QKMQAAEP2004-844356e0-b759-4866-bc89-3e86bbd49c12-nTD44Kk"
                alt="img"
                className="watch-banner"
              />
            </div>
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default MainHeader;
