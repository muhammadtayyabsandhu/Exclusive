import React from 'react'
import HomeSection from '../../Components/HomeSection'

import CategorySlider from './CategorySlider'

import HeroBanner from './HeroBanner'

import NewArrivalSection from './NewArrivalSection'
import FeatureSection from './FeatureSection'
import GiftBasketsSection from './GiftBasketsSection'
import ProductCarousel from './ProductCarousel'
const Home = () => {
  return (
    <>
    <HomeSection/>
    <CategorySlider/>
    <ProductCarousel/>
   
  
    <GiftBasketsSection/>
    <HeroBanner/>
   
    <NewArrivalSection/>
    <FeatureSection/>
    </>
  )
}

export default Home