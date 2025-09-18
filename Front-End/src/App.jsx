import React from 'react'
import Main_routes from './Routes/Main_routes'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext";
// react-toastify imports
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
       <AuthProvider>

        <Main_routes />
       </AuthProvider>
      </BrowserRouter>
      

      {/* Ye global notification container hai */}
      <ToastContainer  position="bottom-right"  autoClose={3000} />
    </>
  )
}

export default App
