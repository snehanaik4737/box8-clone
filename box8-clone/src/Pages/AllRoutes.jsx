import React from 'react'
import { Home } from './Home'
import {Routes,Route} from "react-router-dom"
import { Meals } from './Meals'
import { Checkout } from './Checkout'
import { Navbar } from './Navbar'

export const AllRoutes = () => {
  return (
    <>
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path ="/meals/:_id" element={<Meals/>}></Route>
      <Route path='checkout' element={<Checkout/>}></Route>

    </Routes>
    

    </>
  )
}
