import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

const MainLayout = () => {
  return (
    <main className="min-h-screen w-full bg-(--bg-color) flex flex-col items-center">
      <ScrollRestoration />
      <Navbar />
      <CartSidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
