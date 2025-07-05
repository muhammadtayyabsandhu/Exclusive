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
import PrivateRoute from '../Components/Auth/PrivateRoute'
import ProductDetailPage from '../Pages/Product Detail page/ProductDetailPage'
const Main_routes = () => {
  return (
   <>
   <Routes>
    <Route element={<Layout/>}>
    <Route element={<PrivateRoute/>}>

     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/signup/login' element={<Login/>} />
     <Route path='/cart' element={<CartPage/>} />
     <Route path='*' element={<PageNotFound/>} />
     <Route path="/product/:id" element={<ProductDetailPage/>} />

    </Route>
    

     <Route path='/signup' element={<Signup/>} />
    </Route>
   </Routes>
   </>
  )
}

export default Main_routes