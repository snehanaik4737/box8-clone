import React from 'react'
import { Home } from './Home'
import {Routes,Route} from "react-router-dom"
import { Meals } from './Meals'
import { Checkout } from './Checkout'
import { Navbar } from './Navbar'
import { Shipping } from './Shipping'
import SignupCard from './Signup'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'
import { Footer } from './Footer'

export const AllRoutes = () => {
  return (
    <>
    
      <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/signup' element={<SignupCard/>}></Route>
       <Route path="/login" element={<Login/>}></Route>

      <Route path ="/meals/:_id" element={
      <PrivateRoute>

        <Meals/>
      </PrivateRoute>
      
      }></Route>

      <Route path='/shipping' element={
      <PrivateRoute>

        <Shipping/>
      </PrivateRoute>
      
      }></Route>
      
      <Route path='/checkout' element={
        <PrivateRoute>

          <Checkout/>
        </PrivateRoute>
      }></Route>

    </Routes>
    <Footer/>
    

    </>
  )
}
