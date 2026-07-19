import React from 'react'
import Home from '../pages/Home'
import Products from '../pages/Products'
import About from '../pages/About'
import Product from '../pages/Product'
import { Route, Routes } from 'react-router'

const AppRoutes = ({ productsData }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products productsData={productsData} />} />
            <Route path="/about" element={<About />} />
            <Route path={`/products/${Product.id}`} element={<Product />} />
        </Routes>
    )
}

export default AppRoutes
