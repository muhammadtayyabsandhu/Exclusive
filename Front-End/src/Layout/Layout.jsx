import React from 'react'
import TopHeader from '../Components/TopHeader'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
<>

<Header/>
<main>
  <Outlet/>
</main>
<Footer/>
</>  )
}

export default Layout