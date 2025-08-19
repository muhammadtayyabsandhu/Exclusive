import React from 'react'
import { Route, Routes } from 'react-router'

import Signup from '../Pages/Signup/Signup'
import About from "../Pages/About/About"
import Contact from '../Pages/Contact/Contact'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'
import Layout from '../Layout/Layout'
import Home from '../Pages/Home/Home'
import CartPage from '../Pages/CartPage';
import Login from '../Pages/Login/Login'

import ProductDetailPage from '../Pages/Product Detail page/ProductDetailPage'
import Chocolate from '../Pages/Categories/Chocolate'
import Flower from '../Pages/Categories/Flower'
import Money from '../Pages/Categories/Money'
import Makeup from '../Pages/Categories/Makeup'
import Gift from '../Pages/Categories/Gift'
import Fresh from '../Pages/Categories/Fresh'
const Main_routes = () => {
  return (
   <>
   <Routes>
    <Route element={<Layout/>}>
    

     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/signup/login' element={<Login/>} />
     <Route path='/cart' element={<CartPage/>} />
     <Route path='*' element={<PageNotFound/>} />
     <Route path='/chocolate-bouquet' element={<Chocolate/>} />
     <Route path='/flower-bouquet' element={<Flower/>} />
     <Route path='/money-bouquet' element={<Money/>} />
     <Route path='/makeup-bouquet' element={<Makeup/>} />
     <Route path='/gift-basket' element={<Gift/>} />
     <Route path='/fresh-flowers' element={<Fresh/>} />
     <Route path="/product/:id" element={<ProductDetailPage/>} />


    

     <Route path='/signup' element={<Signup/>} />
    </Route>
   </Routes>
   </>
  )
}

export default Main_routes