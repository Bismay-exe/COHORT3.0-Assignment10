import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const { pathname } = useLocation();

    const getProductsData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=0");
            setProductsData(res.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product]);
    }

    return <MyStore.Provider value={{ productsData, setProductsData, addToCart, addToWishlist, cart, wishlist }}>
        {children}
    </MyStore.Provider>;
}