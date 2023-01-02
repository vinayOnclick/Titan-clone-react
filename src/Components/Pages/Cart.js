import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Grid, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreasedCart,
  removeFromCart,
  clearCart,
  getTotal,
} from "../../features/cartSlice";
import Footer from "../Footer/Footer";
import "./Cart.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  p: 4,
};

const Cart = ({ id, image, name, price, amount }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const { cartTotalAmount } = useSelector((state) => state.cart)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreasedCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleRemoveCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
    handleClose();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handlePopUp = () => {
    setShowPopUp(true);
  };
  const handleClose = () => {
    setShowPopUp(false);
  };

  return (
    <div>
      <div className="cart-section">
        {/* {
          Products 
          && 
          Products.map((product) => {
            return (
               <CartItem key = {product.id} {...product}/>
            )
          })
        } */}

        {cart.cartItems.length === 0 ? (
          <>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <Link to="*">Cart</Link>
                </li>
              </ol>
            </nav>

            <div className="cart-empty">
              <h2>Cart</h2>
              <p> Your Cart Is Empty.</p>
            </div>
            <div>
              <Link to="/">
                <button className="home-btn">CONTINUE SHOPPING</button>
              </Link>
              <hr style={{ maxWidth: '90%'}} />
            </div>
          </>
        ) : (
          <div>
            {cart.cartItems?.map((cartItem) => {
              return (
                <>
                  <h1>Cart : {cartItem.cartQuantity} items</h1>
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <div className="cart-item-section">
                        <Box sx={{ flexGrow: 1 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={4} lg={4} className="cart-image">
                              <h2>ITEM(S)</h2>
                              <hr />

                              <img src={cartItem.image} alt={cartItem.name} />

                              <h5>{cartItem.name}</h5>
                              <h5>{cartItem.number}</h5>
                              <h5>Rs. {cartItem.price}</h5>
                            </Grid>
                            <Grid item xs={4} lg={2}>
                              <h2>QUANTITY</h2>
                              <hr />
                              <div className="btn-group">
                                <button
                                  className="cart-dec"
                                  onClick={() => handleDecreaseCart(cartItem)}
                                >
                                  -
                                </button>
                                <button className="count">
                                  {cartItem.cartQuantity}
                                </button>
                                <button
                                  className="cart-inc"
                                  onClick={() => handleIncreaseCart(cartItem)}
                                >
                                  +
                                </button>
                              </div>
                              <button
                                className="remove-btn"
                                // onClick={() => handleRemoveCart(cartItem)}
                                onClick={handlePopUp}
                              >
                                REMOVE
                              </button>

                              <Modal
                                open={showPopUp}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                className="remove-popup"
                              >
                                <Box sx={style}>
                                  <h4>
                                    Are you sure you want to remove this item
                                    from your cart?
                                  </h4>
                                  <div className="remove-btns">
                                  <button
                                    onClick={() => handleRemoveCart(cartItem)}
                                    className="home-btn"
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={handleClose}
                                    className="home-btn"
                                  >
                                    No
                                  </button>
                                  </div>
                                  
                                </Box>
                              </Modal>
                            </Grid>
                            <Grid item xs={4} lg={2}>
                              <h2>TOTAL</h2>
                              <hr />
                              <div className="cart-total-price">
                                Rs. {cartItem.price * cartItem.cartQuantity}
                              </div>
                            </Grid>

                         
                          </Grid>
                        </Box>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
             <div className="sub-total">
                                <div className="order-summary">
                                  <h1>Order summary</h1>
                                  <div className="order-menu">
                                    <Link className="active">
                                    </Link>
                                    <Link>VIEW PROMO CODES</Link>
                                  </div>
                                  <div className="apply-code">
                                    <input></input>
                                    <button>APPLY</button>
                                  </div>
                                </div>
                                <span className="pay">
                                  Order Total ({cartTotalQuantity} items) 
                                 
                                    Rs. {cartTotalAmount}
                                 
                                </span><br/>
                                <span className="pay">YOU PAY </span>
                                <span className="amount">
                                  Rs.{cartTotalAmount}
                                </span>
                                <span>Shipping</span>
                                <span>Discount</span>
                              </div>
                              <p className="taxes">INCLUSIVE OF ALL TAXES*</p>
                              <div className="cart-checkout">
                                <button>Proceed to Checkout</button>
                              </div>
                              <br />
                              <br />
                              <Link to="/">
                                <button className="continue-shop">
                                  CONTINUE SHOPPING
                                </button>
                              </Link>
                              <div className="clear-cart">
                                <br />
                                <br />
                                <button onClick={() => handleClearCart()}>
                                  EMPTY CART
                                </button>
                              </div>
          </div>
        )}
        
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
