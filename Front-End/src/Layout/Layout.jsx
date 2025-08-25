import React from 'react'

import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'
import PopupForm from '../Components/PopupForm'

const Layout = () => {
  return (
<>

<Header/>
<main>
  <Outlet/>
  <PopupForm/>
</main>
<Footer/>
</>  )
}

export default Layout