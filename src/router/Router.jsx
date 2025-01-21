import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Basket from '../pages/basket/Basket'
import NotFoundPage from '../pages/notfoundpage/NotFoundPage'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/basket'element={<Basket/>}/>
        <Route path='*'element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router