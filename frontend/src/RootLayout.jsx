import React from 'react'
import HomePage from './pages/HomePages.jsx'
import LoginForm from './components/LoginForm'
import AuthPage from './pages/AuthPages.jsx'
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar'

const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default RootLayout
