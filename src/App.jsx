import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

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
      <AppRoutes productsData={productsData} />
      <Footer />
    </main>
  );
};

export default App;
