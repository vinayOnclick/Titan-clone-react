import React from 'react'
import './Login/Login.scss'
import { brands } from '../../Constant/Constant'
import Footer from '../Footer/Footer'

const Brands = () => {
  return (
    <>
      <h1 style={{textAlign: "center" }}>
        OUR BRANDS
      </h1>
      <div className='box-wrapper row'>
      {
        brands.map((brand) => {
          return (
            <div key= {brand.id} className='box-brand col-md-3 col-sm-12 col-12'>

            <img src={brand.image} alt='img' className='brand'/>
               <img src={brand.logo} alt='logo' className='logo'/>
              </div>
          )
        })
      }
      </div>
     <Footer />
    </>
  )
}

export default Brands