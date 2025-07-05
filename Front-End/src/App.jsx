import React from 'react'

import Main_routes from './Routes/Main_routes'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <>

   <BrowserRouter>
   <Main_routes/>
   </BrowserRouter>
    </>
  )
}

export default App