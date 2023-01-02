import React, { useEffect, useState } from "react";
import Products from "../../Constant/Constant";
import "./Products.scss";
import Icon from "../../Assests/Images/icon.svg";
import Carousel from "react-bootstrap/Carousel";
// import { Carousel, Modal, ModalBody, ModalHeader } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decreasedCart } from "../../features/cartSlice";

const ProductDetail = ({ isShowProduct, setIsShowProduct }) => {
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
  const product = Products.find((product) => product.id === id);

  useEffect(() => {

    const findProduct = () => {
      const product = Products.find((product) => product.id === id);
      setProductDetail(product);
      console.log(product);
    };
    findProduct();
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { image, name, price,cartQuantity } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart')
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreasedCart(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="modal-container">
      {/* <Modal
        className="modal-dailog"
        size="xl"
        isOpen={isShowProduct}
        toggle={() => setIsShowProduct(!isShowProduct)}
      >
        <ModalHeader toggle={() => setIsShowProduct(false)}></ModalHeader>
        <ModalBody> */}
      <div className="row detail-row">
        <div className="col-md-6 desc-section1">
        <img src={Icon} alt="icon" className="icon-img"   onClick={() => handleAddToCart(product)}/>

          <Carousel>
            <Carousel.Item>
            <img src={image} alt={name} />
            </Carousel.Item>
            <Carousel.Item>
            <img src={image} alt={name} />
            </Carousel.Item>
            <Carousel.Item>
            <img src={image} alt={name} />
            </Carousel.Item>
            <Carousel.Item>
            <img src={image} alt={name} />
            </Carousel.Item>
          </Carousel>


         
        </div>
        <div className="col-md-6 desc-section2">
          <p>TITAN</p>
          <h5>{name}</h5>
          <p>Rs.{price}</p>
          <div className="detail-btns">
            <button onClick={() => handleDecreaseCart(product)}> - </button>
            <button style={{color: 'black'}}>{cartQuantity}</button>
            <button onClick={() => handleIncreaseCart(product)}> + </button>
          </div>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
      {/* </ModalBody>
      </Modal> */}
    </div>
  );
};

export default ProductDetail;
