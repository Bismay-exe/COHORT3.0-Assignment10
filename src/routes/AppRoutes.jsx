import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import ProductDetails from '../pages/ProductDetails'
import { Route, Routes } from 'react-router'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
    )
}

export default AppRoutes
