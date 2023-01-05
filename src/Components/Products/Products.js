import React, { useState } from "react";
import Products from "../../Constant/Constant";
import { Link } from "react-router-dom";
import "./Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import banner from "../../Assests/Images/banner.gif";
// import { Rating, Stack} from '@mui/material'

export const Star = ({ starId, rating, onMouseEnter, onClick }) => {
  let styleClass = "star-rating-blank";
  if (rating && rating >= starId) {
    styleClass = "star-rating-filled";
  }
  return (
    <div className="star" onMouseEnter={onMouseEnter} onClick={onClick}>
      <svg
        height="3.5rem"
        width="2.5rem"
        className={styleClass}
        viewBox="0 0 25 23"
        data-rating="1"
      >
        <polygon
          strokeWidth="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

const Product = ({ handleProductClick }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  const handleOpen = () => {
    handleProductClick();
  };
  return (
    <div>
      <div className="inner">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          // breakpoints={{
          //   0 : {
          //      width: 0,
          //      slidesPerView: 2,
          //      slidesPerGroup: 2,
          //   },
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 3,
          //     slidesPerGroup: 3,

          //   },
            // // when window width is >= 768px
            // 768: {
            //   width: 768,
            //   slidesPerView: 4,
            //   slidesPerGroup: 4,

          //   },
          // }}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {Products &&
            Products.map((product) => {
              return (
                <SwiperSlide>
                  <div key={product.id} className="box">
                    <img src={product.image} alt="img" className="pro-img" />
                    <br />
                    <h5
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "200",
                        marginLeft: 0,
                      }}
                    >
                      {product.name}
                    </h5>
                    <p>Rs. {product.price}</p>
                    <div className="ribbon">
                      <span className="ribbon-1">NO COST EMI</span>
                      <span className="ribbon-2">SMART WATCH</span>
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="quick-view"
                      onClick={handleOpen}
                    >
                      Quick View
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="banner-gif">
        <img src={banner} alt="img" />
        <div className="row" style={{ paddingBottom: "0" }}>
          <div className="col-md-9">
            <h6 style={{ fontSize: "1.6rem"}}>Real reviews from real customer</h6>
          </div>
          <div className="col-md-3">
            <div className="rating" style={{ display: "flex" }}>
              {stars.map((star, i) => {
                return (
                  <Star
                    key={i}
                    starId={i}
                    rating={hoverRating || rating}
                    onMouseEnter={() => setHoverRating(i)}
                    onclick={() => setRating(i)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack> */}
    </div>
  );
};

export default Product;
