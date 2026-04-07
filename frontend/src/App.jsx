import React from 'react'
import HomePage from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar.jsx'

const App = () => {
  return (
    <>
      <div className='min-h-screen bg-slate-50'>
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App