import React,{ useState} from 'react'
import './style.scss'
import Icon from '../../Assests/Images/icon.svg'
import { Link } from 'react-router-dom'
import { Box, FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import Footer from '../Footer/Footer'
import Products from '../../Constant/Constant'



const MensWatch = ({handleProductClick}) => {
    const [sortBy, setSortBy] = useState('') 

    const handleOpen = () => {
      handleProductClick();
    };
    
    const handleChange= (event) => {
       setSortBy(event.target.value)
    }
  return (
    <>
      <div className='mens-section'>
      
        <Link to='/'>
            <img src='https://www.titan.co.in/wps/wcm/connect/titanrt/0d955429-fc61-43dc-8539-4284e048a012/desktop/Season-of-smiles_2500x500.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_90IA1H80OGR2D068O7K5LN3O26-0d955429-fc61-43dc-8539-4284e048a012-desktop-okh6Zw9' 
            alt='img'/>
        </Link>
           <h6 className='customh6'>FOUND 1935 <span className='custom-span'>WATCHES ON SEASON OF SMILES OFFER</span> </h6>
           <div className='row-btns'>
          
                <button className='btn-compare'>
                  <img src={Icon} alt ='logo' className='icon-compare'/>
                 <h6>COMPARE</h6> 
                  </button>
            
                <Box sx={{ minWidth: 150}}>
      <FormControl fullWidth  variant='standard'>
        <InputLabel id="demo-simple-select-label" sx={{ color: 'black' }}>SORT BY</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={1}>Best Sellers</MenuItem>
          <MenuItem value={2}>New Arrivals</MenuItem>
          <MenuItem value={3}>Popularity</MenuItem>
          <MenuItem value={4}>Discount(Lowest To Highest)</MenuItem>
          <MenuItem value={5}>Discount(Highest To Lowest)</MenuItem>
          <MenuItem value={6}>Price(Lowest to Highest)</MenuItem>


        </Select>
      </FormControl>
    </Box>
           </div>
      </div>
      <div className='mens-list'>
        <div className='inner'>
         {
          Products && 
          Products.map((product) => {
            return (
              <div key={product.id} className="box">
                <img src={product.image} alt="img" className="pro-img" />
                <br />
                <h5 style={{fontSize: '11px'}}>{product.name}</h5>
                <p>{product.price}</p>
                <div className="ribbon">
                <span className="ribbon-1">NO COST EMI</span>
                <span className="ribbon-2">SMART WATCH</span>
                </div>
                <Link to={`/products/${product.id}`} className="quick-view" onClick={handleOpen}>
                  Quick View
                </Link>
              </div>
            );
          })}
         </div>
      </div>
     <Footer />
    </>
  )
}

export default MensWatch

