import "./App.scss";
import connect from "./Assests/Images/connect.svg";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./_root.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Brands from "./Components/Pages/Brands";
import Login from "./Components/Pages/Login/Login";
import Book from "./Components/Pages/Book/Book";
import Encircle from "./Components/Pages/Encircle";
import Wishlist from "./Components/Pages/Wishlist/Wishlist";
import Cart from "./Components/Pages/Cart";
import { useState } from "react";
import Currency from "./Components/Pages/Currency/Currency";
import MainHeader from "./Components/MainHeader/MainHeader";
import Products from "./Components/Products/Products";
import ProductDetail from "./Components/Products/ProductDetail";
import Home from "./Home/Home";
import MensWatch from "./Components/Pages/MensWatch";
import VideoCall from "./Components/Pages/Book/Route/VideoCall";
import VisitStore from "./Components/Pages/Book/Route/VisitStore";
import Service from "./Components/Pages/Book/Route/Service";
import Womencategory from "./Components/Category/Pages/Womencategory";
import Error from "./Components/Error";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar/Navbar";
import CreateProduct from "./Components/Product/CreateProduct";
import Register from "./Components/Pages/Register/Register"



function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowCurrency, setIsShowCurrency] = useState(false);
  const [isShowProduct, setIsShowProduct] = useState(false);
  const [isShowConnect, setIsShowConnect] = useState(false);

  const [cart, setCart] = useState([]);

  const handleLoginClick = () => {
    setIsShowLogin(!isShowLogin);
  };

  const handleCurrencyClick = () => {
    setIsShowCurrency(!isShowCurrency);
  };

  const handleConnectClick = () => {
    setIsShowConnect(!isShowConnect);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <div className="navbar-component">
          <Navbar />
        </div>
        <Header
          handleLoginClick={handleLoginClick}
          handleCurrencyClick={handleCurrencyClick}
        />

        <Login isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} />


        <Currency isShowCurrency={isShowCurrency} />
        <MainHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path ='/register' element={<Register />} />
          <Route path="/book/" element={<Book />}>
            <Route path="video-call" element={<VideoCall />} />
            <Route path="visit-store" element={<VisitStore />} />
            <Route path="service" element={<Service />} />
          </Route>
          <Route path="/encircle" element={<Encircle />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route
            path="/cart"
            exact
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={
              <ProductDetail
                isShowProduct={isShowProduct}
                setIsShowProduct={setIsShowProduct}
              />
            }
          />

          <Route path="/mens-watch" element={<MensWatch />} />
          <Route path="/women-watch" element={<Womencategory />} />
          <Route path="*" element={<Error />} />
          <Route path='/create-product' element={<CreateProduct />} />
        </Routes>
        <img
          src={connect}
          alt="connect"
          className="sticky"
          onClick={handleConnectClick}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
