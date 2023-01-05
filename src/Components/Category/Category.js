import React from "react";
import "./Category.scss";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "react-multi-carousel/lib/styles.css";
import talk from "../../Assests/Images/talk.webp";
import xylys from "../../Assests/Images/xylys.webp";
import tommy from "../../Assests/Images/tommy.webp";
import clock from "../../Assests/Images/clock.jpg";
import reflextunes from "../../Assests/Images/reflextunes.webp";
import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/material";

const Category = ({ handleMenCategoryClick, handleWomenCategoryClick }) => {
  return (
    <>
      <div className="category-section">
        <h2 style={{ textAlign: "center" }}>SHOP FOR</h2>
        <div className="product-category">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            slidesPerGroup={6}
            autoplay={true}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")} 
            breakpoints={{
              0 : {
                 width: 0,
                 slidesPerView: 3,
                 slidesPerGroup: 3,
              },
              640: {
                width: 640,
                slidesPerView: 3,
                slidesPerGroup: 3,
                
              },
              768: {
                width: 768,
                slidesPerView: 4,
                slidesPerGroup: 4,

              },
            }}
          >
            <SwiperSlide>
              <div key="1">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-men.webp"
                  alt="img"
                />
                <Link to="/mens-watch">
                  {" "}
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Men Watches
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="2">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-women.webp"
                  alt="img"
                />
                <Link to="/women-watch">
                  {" "}
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Women Watches
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="3">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-pair.webp"
                  alt="img"
                />
                <Link to="/couples-watch">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Couples Watches
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="4">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-kids.webp"
                  alt="img"
                />
                <Link to="/kids-watch">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Kids Watches
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="5">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-wallClock.webp"
                  alt="img"
                />
                <Link to="/wall-clocks">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Wall Clocks
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="6">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essential_mask.webp"
                  alt="img"
                />
                <Link to="/face-mask">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Face Masks
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="7">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-personalize.webp"
                  alt="img"
                />
                <Link to="/personalized">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Personalized
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="8">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-performance.webp"
                  alt="img"
                />
                <Link to="/performance">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Performance Gear
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="9">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-belt.webp"
                  alt="img"
                />
                <Link to="/belts">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Belts
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="10">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-men-straps.webp"
                  alt="img"
                />
                <Link to="/straps">
                  <h6
                    style={{
                      textAlign: "center",
                      color: "black",
                      fontSize: "1.6rem",
                    }}
                  >
                    Straps
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div key="11">
                <img
                  src="https://staticimg.titan.co.in/Titan/Banners/home/shopByCategory/essentials_titan-wallet.webp"
                  alt="img"
                />
                <Link to="/wallets">
                  <h6 style={{ textAlign: "center", color: "black" }}>
                    Wallets
                  </h6>
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <Box>
        <Grid container spacing={2}>
          <Grid item lg={3} xs={6} sm={6}>
            <img src={talk} alt="img" className="img-fluid" />
          </Grid>
          <Grid item lg={3} xs={6} sm={6}>
            <img src={xylys} alt="img" className="img-fluid" />
          </Grid>
          <Grid item lg={3} xs={6} sm={6}>
            <img src={tommy} alt="img" className="img-fluid" />
          </Grid>
          <Grid item lg={3} xs={6} sm={6}>
            <img src={reflextunes} alt="img" className="img-fluid" />
          </Grid>
        </Grid>
      </Box>
      <div className="banner container-fluid-1">
        <img src={clock} alt="img" />
      </div>
     

      <div className="collection">
        <h2 style={{ textAlign: "center", marginTop: 20 }}>OUR COLLECTION</h2>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <ul>
              <li>
                <button to="/men" className="btn-collection">
                  MEN
                </button>
              </li>
              <li>
                <button to="/women" className="btn-collection">
                  WOMEN
                </button>
              </li>
              <li>
                <button to="/luxury" className="btn-collection">
                  LUXURY
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-4"></div>
        </div>


        <Box>
          <Grid container spacing ={2} className='collection-img-section'>
            <Grid item xs={6} md={3} lg={3}>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/1a26b3c9-ab1c-4875-972c-d3b8c7ba37bf/Edge-ceramic.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-1a26b3c9-ab1c-4875-972c-d3b8c7ba37bf-ojH.9BF"
                alt="img"
                className="img-1"
              />
              <br />
              <Link style={{ textAlign: "center", color: "black" }}>
                Slimmest watch with intelligent design
              </Link>
            </Grid>
            <Grid item xs={6} md={6} lg={3} >
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/17648765-637e-4abc-b9eb-ea5feca49471/col-Grandmaster.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-17648765-637e-4abc-b9eb-ea5feca49471-ojH.dX0"
                alt="img"
                className="img-2"
              />
              <br />
              <Link style={{ textAlign: "center", color: "black" }}>
                Titan Grand Master
              </Link>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/193eb44b-913f-4dcd-b0e2-4cc3f70f687c/col-regalia.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-193eb44b-913f-4dcd-b0e2-4cc3f70f687c-ojH.gNU"
                alt="img"
                className="img-3"
              />
              <br />
              <Link style={{ textAlign: "center", color: "black" }}>
                Regalia
              </Link>
            </Grid>
            <Grid item xs={6} md={6} lg={3}>
              <img
                src="https://www.titan.co.in/wps/wcm/connect/titanrt/3d42747b-5f76-4418-acf3-c37a67196b47/col-maritime.jpg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-3d42747b-5f76-4418-acf3-c37a67196b47-ojH.j4M"
                alt="img"
                className="img-4"
              />
              <br />
              <Link style={{ textAlign: "center", color: "black" }}>
                Maritime
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Category;
