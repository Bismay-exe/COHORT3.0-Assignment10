import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { Auth } from "./AuthContext";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [productsData, setProductsData] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { loggedInUser, setLoggedInUser, setRegisteredUsers } = useContext(Auth);

    useEffect(() => {
        if (loggedInUser) {
            setCartItems(loggedInUser.cart || []);
            setWishlist(loggedInUser.wishlist || []);
        } else {
            setCartItems([]);
            setWishlist([]);
        }
    }, [loggedInUser?.email]);

    useEffect(() => {
        if (loggedInUser) {
            setLoggedInUser((prev) => {
                if (!prev) return prev;
                const updated = { ...prev, cart: cartItems };
                localStorage.setItem("loggedinUser", JSON.stringify(updated));
                return updated;
            });
            
            setRegisteredUsers((prev) => {
                const updated = prev.map((u) => 
                    u.email === loggedInUser.email ? { ...u, cart: cartItems } : u
                );
                localStorage.setItem("registeredUsers", JSON.stringify(updated));
                return updated;
            });
        }
    }, [cartItems]);

    useEffect(() => {
        if (loggedInUser) {
            setLoggedInUser((prev) => {
                if (!prev) return prev;
                const updated = { ...prev, wishlist: wishlist };
                localStorage.setItem("loggedinUser", JSON.stringify(updated));
                return updated;
            });
            
            setRegisteredUsers((prev) => {
                const updated = prev.map((u) => 
                    u.email === loggedInUser.email ? { ...u, wishlist: wishlist } : u
                );
                localStorage.setItem("registeredUsers", JSON.stringify(updated));
                return updated;
            });
        }
    }, [wishlist]);

    const getProductsData = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products?limit=0");
            setProductsData(res.data.products);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    const addToCart = (product) => {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        setIsCartOpen(true);
    };

    const toggleWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.filter((item) => item.id !== product.id);
            }
            return [...prev, { ...product }];
        });
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
                isLoading,
                setIsLoading,
                toggleWishlist,
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
