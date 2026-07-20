import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const { pathname } = useLocation();

    const getProductsData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=10");
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

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        setIsCartOpen(true);
    };

    const addToWishlist = (product) => {
        setWishlist([...wishlist, product]);
    };

    const incrementQuantity = (id) => {
        setCartItems((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
            });
        });
    };

    const decrementQuantity = (id) => {
        setCartItems((prev) => {
            return prev.map((val) => {
                return val.id === id ? { ...val, quantity: val.quantity - 1 } : val;
            }).filter((val) => val.quantity > 0);
        });
    };

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0) || 0;

    return (
        <MyStore.Provider
            value={{
                productsData,
                setProductsData,
                addToWishlist,
                cartItems,
                setCartItems,
                addToCart,
                wishlist,
                isCartOpen,
                setIsCartOpen,
                incrementQuantity,
                decrementQuantity,
                totalQuantity,
            }}
        >
            {children}
        </MyStore.Provider>
    );
};
