import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import CategoryCard from "../../components/CategoryCard";

const Categories = ({ categories, selectedCategory, handleCategoryClick, getCategoryImage }) => {
    const navigate = useNavigate();

    return (
        <>
            <section className="hidden py-16 md:py-20 border-b border-(--border-color)">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
                    <div>
                        <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                            Categories
                        </p>

                        <h2 className="font-inter text-3xl md:text-4xl font-semibold tracking-tight mt-2">
                            Shop your way.
                        </h2>
                    </div>

                    <button
                        onClick={() => navigate("/products")}
                        className="flex items-center gap-2 font-space text-xs text-(--text-muted) hover:text-(--text-color) transition-colors cursor-pointer"
                    >
                        View everything
                        <ArrowRight size={14} />
                    </button>
                </div>

                {/* Category Selector */}
                <div className="flex flex-wrap gap-2 mt-8">
                    <button
                        onClick={() => handleCategoryClick("all")}
                        className={`px-5 py-2.5 rounded-full border font-space text-sm capitalize transition-all duration-300 cursor-pointer ${selectedCategory === "all"
                            ? "bg-(--text-color) text-(--bg-color) border-(--text-color)"
                            : "border-(--border-color) text-(--text-muted) hover:text-(--text-color)"
                            }`}
                    >
                        All Products
                    </button>

                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => handleCategoryClick(category.slug)}
                            className={`px-5 py-2.5 rounded-full border font-space text-sm capitalize transition-all duration-300 cursor-pointer ${selectedCategory === category.slug
                                ? "bg-(--text-color) text-(--bg-color) border-(--text-color)"
                                : "border-(--border-color) text-(--text-muted) hover:text-(--text-color)"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </section>

            <section className="py-16 md:py-24 border-b border-(--border-color)">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
                    <div>
                        <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                            Explore Categories
                        </p>

                        <h2 className="font-inter text-3xl md:text-5xl font-semibold tracking-[-0.04em] mt-2">
                            Shop your way.
                        </h2>
                    </div>

                    <button
                        onClick={() => navigate("/products")}
                        className="group flex items-center gap-2 font-space text-xs text-(--text-muted) hover:text-(--text-color) transition-colors cursor-pointer"
                    >
                        View all products
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
                    {categories.map((category, index) => {
                        const categoryImage = getCategoryImage(category.slug);

                        return (
                            <CategoryCard
                                key={category.slug}
                                category={category}
                                index={index}
                                categoryImage={categoryImage}
                                onClick={() => navigate(`/products?category=${encodeURIComponent(category.slug)}`)}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Categories;
