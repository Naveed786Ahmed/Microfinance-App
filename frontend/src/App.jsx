import React from 'react'
import HomePage from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar.jsx'
import Register from './pages/Register.jsx'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login.jsx'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  )
}

export default App