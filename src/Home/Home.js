import React,{ useState} from 'react'
import Category from '../Components/Category/Category'
import Slider from '../Components/Slider/Slider'
import Products from '../Components/Products/Products'
import Footer, { FirstFooter } from '../Components/Footer/Footer'


const Home = () => {
    const [isShowProduct, setIsShowProduct] = useState(false);
    const [isMenCategory, setIsMenCategory] = useState(false);
    const [isWomenCategory, setIsWomenCategory] = useState(false);

  const handleProductClick = () => {
    setIsShowProduct(!isShowProduct);
  };

  const handleMenCategoryClick = () => {
    setIsMenCategory(!isMenCategory)
  }
  const handleWomenCategoryClick = () => {
    setIsWomenCategory(!isWomenCategory)
  }
  return (
    <div>
      <Slider/>
      <Category handleMenCategoryClick={handleMenCategoryClick} 
      handleWomenCategoryClick={handleWomenCategoryClick} 
      />
        <Products handleProductClick={handleProductClick} />
        <FirstFooter />
        <Footer />
    </div>
  )
}

export default Home
