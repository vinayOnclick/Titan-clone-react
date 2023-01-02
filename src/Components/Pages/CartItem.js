import React from 'react'
import './Cart.scss'
import { Link } from 'react-router-dom'

const CartItem = ({ id, image, name, price , amount}) => {

  return (
    <div>
      <div className='cart-item-section'>
         <div className='row'>
            <div className='col-md-8'>
              <div className='row'>
            <div className='col-md-8'>
                <img src= {image} alt={name} className='img-fluid' />

              </div>
              <div className='col-md-4'>
                   <h5>{name}</h5>
                <h5>Rs. {price}</h5>
                <div className='btn-group'>
                <button>-</button>
                  <p>{amount}</p>
                  <button>+</button>
                
                </div>
                <br/><br/>
                <button className='remove-btn' variant='standard'>Remove</button>
              </div>
              </div>

              
            </div>
         </div>
      </div>
      <Link to ='/'><button className='home-btn'>CONTINUE SHOPPING</button></Link>
    </div>
  )
}

export default CartItem
