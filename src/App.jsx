import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCards from "./components/ProductCards";
import Product from "./pages/Product";
import { Routes } from "react-router";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  console.log(productsData);

  const getProductsData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <main className="min-h-screen w-full bg-(--bg-color) flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home productsData={productsData} />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path={`/products/${Product.id}`} element={<Product />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
