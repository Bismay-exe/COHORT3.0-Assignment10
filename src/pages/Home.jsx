import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Hero from "../sections/home/Hero";
import OverView from "../sections/home/OverView";
import Categories from "../sections/home/Categories";
import TopRated from "../sections/home/TopRated";
import NewArrival from "../sections/home/NewArrival";

const Home = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [loading, setLoading] = useState(true);

    // Replace this with your actual cart state/context
    const cartItems = 0;

    // Fetch Products
    const getProducts = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://dummyjson.com/products?limit=0");
            setProducts(res.data.products);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch Categories
    const getCategories = async () => {
        try {
            const res = await axios.get(
                "https://dummyjson.com/products/categories",
            );
            setCategories(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    // Top Rated
    const topRatedProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);

    // New Arrivals
    const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 4);

    // Products with 4.5+ rating
    const totalTopRated = products.filter(
        (product) => product.rating >= 4.5,
    ).length;

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "all") {
            navigate("/products");
        } else {
            navigate(`/products?category=${encodeURIComponent(category)}`);
        }
    };

    const getCategoryImage = (categorySlug) => {
        const product = products.find(
            (product) => product.category === categorySlug
        );
        return product?.thumbnail;
    };

    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color)">
            <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8">
                
                <Hero />
                
                <OverView 
                    products={products} 
                    categories={categories} 
                    cartItems={cartItems} 
                    totalTopRated={totalTopRated} 
                />
                
                <Categories 
                    categories={categories} 
                    selectedCategory={selectedCategory} 
                    handleCategoryClick={handleCategoryClick} 
                    getCategoryImage={getCategoryImage} 
                />
                
                <TopRated 
                    topRatedProducts={topRatedProducts} 
                />
                
                <NewArrival 
                    newArrivals={newArrivals} 
                />

            </div>
        </main>
    );
};

export default Home;
