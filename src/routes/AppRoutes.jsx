import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import Home from '../pages/Home';
import Products from '../pages/Products';
import About from '../pages/About';
import ProductDetails from '../pages/ProductDetails';
import WishList from '../pages/WishList';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path: "/auth",
            element: <PublicRoute />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        { path: "login", element: <LoginPage /> },
                        { path: "register", element: <RegisterPage /> },
                    ]
                }
            ]
        },
        {
            path: "/",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <MainLayout />,
                    children: [
                        { path: "", element: <Home /> },
                        { path: "products", element: <Products /> },
                        { path: "about", element: <About /> },
                        { path: "products/:id", element: <ProductDetails /> },
                        { path: "wishlist", element: <WishList /> },
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to="/" />
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRoutes;
