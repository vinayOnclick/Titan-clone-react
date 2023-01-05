import React from 'react'
import './Slider.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import slider from "../../Assests/Images/slider.jpg";
import slider2 from "../../Assests/Images/slider2.jpg";
import slider3 from "../../Assests/Images/slider3.jpg";
import Axio from '../../Assests/Images/Axio.webp';
import Bajaj from '../../Assests/Images/Bajaj.webp';


const Slider = () => {
  return (
    <>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={slider}
          alt="First slide"
        />
      
      </Carousel.Item>
            <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

      </Carousel.Item>
            <Carousel.Item interval={1000}>

        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  
      
      <div className='bank-offers'>
 
       <div className='col-md-2 col-xs-5 card-1'>
          <img src= {Axio} alt='axio' className='img-fluid' />
       </div>
       <div className='col-md-2 col-xs-7 card-2'>
        <h3>Cardless EMI</h3>
        <p>0% interset | 3-12 Months EMI</p>
        <p>No Credit Card Needed</p>
       </div>
       <div className='col-md-2 col-xs-7 hidden-xs card-3'>
        <h3>Bajaj Finserv No Cost EMI</h3>
        <p>0% interset</p>
        <p>3-12 Months EMI</p>
       </div>
       <div className='col-md-2 col-xs-5 hidden-xs card-4'>
          <img src= {Bajaj} alt='bajaj' className='img-fluid' />
       </div>
     </div>
      </>


  )
}

export default Slider