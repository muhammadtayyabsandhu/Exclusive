import React from 'react'
import HomeSection from '../../Components/HomeSection'
import FlashSales from './FlashSales'
import CategorySlider from './CategorySlider'
import BestSellingProducts from './BestSellingProducts'
import HeroBanner from './HeroBanner'
import ProductSection from './ProductSection'
import NewArrivalSection from './NewArrivalSection'
import FeatureSection from './FeatureSection'
const Home = () => {
  return (
    <>
    <HomeSection/>
    <FlashSales/>
    <CategorySlider/>
    <BestSellingProducts/>
    <HeroBanner/>
    <ProductSection/>
    <NewArrivalSection/>
    <FeatureSection/>
    </>
  )
}

export default Home