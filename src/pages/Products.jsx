import React, { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Search, SlidersHorizontal, ArrowDownAZ } from "lucide-react";
import ProductCards from "../components/ProductCards";
import { MyStore } from "../contexts/MyContext";

const Products = () => {
  let { productsData, isLoading } = useContext(MyStore);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "all";

  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOption, setSortOption] = useState("default");

  const getCategories = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const cat = new URLSearchParams(location.search).get("category") || "all";
    setSelectedCategory(cat);
  }, [location.search]);

  const handleCategoryChange = (e) => {
    const cat = e.target.value;
    setSelectedCategory(cat);
    if (cat === "all") {
      navigate("/products");
    } else {
      navigate(`/products?category=${cat}`);
    }
  };

  let filteredProducts = productsData.filter((product) => {
    
    let title = product.title.toLowerCase();
    let description = product.description.toLowerCase();
    let search = searchQuery.toLowerCase();

    let matchesSearch = false;
    if (title.includes(search) || description.includes(search)) {
      matchesSearch = true;
    }

    let matchesCategory = false;
    if (selectedCategory === "all") {
      matchesCategory = true;
    } else if (product.category === selectedCategory) {
      matchesCategory = true;
    }

    if (matchesSearch === true && matchesCategory === true) {
      return true;
    } else {
      return false;
    }
  });

  if (sortOption === "price-asc") {
    filteredProducts.sort((a, b) => {
      const priceA = a.price * (1 - a.discountPercentage / 100);
      const priceB = b.price * (1 - b.discountPercentage / 100);
      return priceA - priceB;
    });
  } else if (sortOption === "price-desc") {
    filteredProducts.sort((a, b) => {
      const priceA = a.price * (1 - a.discountPercentage / 100);
      const priceB = b.price * (1 - b.discountPercentage / 100);
      return priceB - priceA;
    });
  } 
  
  if (sortOption === "rating") {
    filteredProducts.sort((a, b) => {
      return b.rating - a.rating;
    });
  } 
  
  if (sortOption === "a-z") {
    filteredProducts.sort((a, b) => {
      if (a.title < b.title) {
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  if (isLoading) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-(--text-color)"></div>
      </div>
    );
  }

  return (
    <main className="max-w-[1920px] mx-auto">
      <div className="p-8 md:p-12 flex flex-col sm:flex-row justify-start items-start sm:gap-6">
        <h1 className="font-inter font-semibold text-(--text-color) text-5xl md:text-6xl uppercase tracking-tighter flex justify-start items-end">
          All
        </h1>
        <h1 className="font-inter font-semibold text-(--text-color) text-5xl md:text-6xl uppercase tracking-tighter flex justify-start items-end">
          Products
          <span className="font-space font-normal text-(--text-muted) text-base normal-case tracking-wider ml-2 mb-2 leading-none flex">
            ({productsData.length}
            <span className="hidden md:block ml-2"> Items</span>)
          </span>
        </h1>
      </div>

      {/* Search, Categories, and Sort Section */}
      <div className="px-4 md:px-8 pb-8 xborder-b border-(--border-color)">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-(--border-color) bg-(--secondary-bg-color) 
                placeholder:text-(--text-muted) outline-none text-(--text-color) transition-colors font-space text-sm"
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            {/* Categories */}
            <div className="relative flex-1 sm:flex-none">
              <SlidersHorizontal
                className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                size={18}
              />
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full sm:w-56 pl-11 pr-8 py-3 appearance-none rounded-2xl border border-(--border-color) bg-(--secondary-bg-color) placeholder:text-(--text-muted) outline-none text-(--text-color) transition-colors font-space text-sm cursor-pointer capitalize"
              >
                <option value="all" className="text-(--text-color) bg-(--bg-color)">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug} className="text-(--text-color) bg-(--bg-color)">
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="relative flex-1 sm:flex-none">
              <ArrowDownAZ
                className="absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted)"
                size={18}
              />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full sm:w-56 pl-11 pr-8 py-3 appearance-none rounded-2xl border border-(--border-color) bg-(--secondary-bg-color) placeholder:text-(--text-muted) outline-none text-(--text-color) transition-colors font-space text-sm cursor-pointer capitalize"
              >
                <option value="default" className="text-(--text-color) bg-(--bg-color)">Sort by: Default</option>
                <option value="price-asc" className="text-(--text-color) bg-(--bg-color)">Price: Low to High</option>
                <option value="price-desc" className="text-(--text-color) bg-(--bg-color)">Price: High to Low</option>
                <option value="rating" className="text-(--text-color) bg-(--bg-color)">Top Rated</option>
                <option value="a-z" className="text-(--text-color) bg-(--bg-color)">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4 md:p-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((elem) => {
            return <ProductCards key={elem.id} product={elem} />;
          })
        ) : (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center">
            <h3 className="font-inter text-2xl font-semibold mb-2">
              No products found
            </h3>
            <p className="font-space text-(--text-muted)">
              Try adjusting your search or category filters.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;
