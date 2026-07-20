import { Heart, ShoppingBag, Star } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCards = ({ product }) => {
    const navigate = useNavigate();

    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    return (
        <article className="group relative w-full overflow-hidden rounded-3xl border border-(--border-color) bg-(--secondary-bg-color) transition-all duration-500 hover:-translate-y-1">

            {/* Image Section */}
            <div
                onClick={() => navigate(`/products/${product.id}`)}
                className="relative aspect-4/5 overflow-hidden bg-(--bg-secondary-color) p-8 cursor-pointer"
            >
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full border border-(--border-color) bg-(--text-color) text-(--bg-color) font-space text-xs tracking-wider capitalize">
                    {product.category}
                </span>

                {/* Wishlist */}
                <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 p-3.5 flex items-center justify-center border border-(--border-color) bg-(--blur-text-color) text-(--text-muted) hover:text-(--red) backdrop-blur-sm hover:bg-(--red-bg) rounded-xl transition-all duration-300 cursor-pointer"
                >
                    <Heart size={20} />
                </button>

                {/* Add to Cart - Desktop */}
                <button
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-4 left-4 right-4 hidden lg:flex items-center justify-center gap-2 py-3 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out cursor-pointer"
                >
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
            </div>

            {/* Product Information */}
            <div className="p-5">

                {/* Rating */}
                <div className="flex items-center justify-between gap-3 mb-3">

                    <div className="flex items-center gap-1.5">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-space text-sm text-(--text-color)">
                            {product.rating}
                        </span>

                        <span className="font-space text-xs text-(--text-muted)">
                            ({product.reviews?.length || 0})
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                        <span className="font-space text-xl font-medium text-(--text-color)">
                            ${discountedPrice.toFixed(2)}
                        </span>

                        {product.discountPercentage > 0 && (
                            <span className="font-space text-xs text-(--text-muted) line-through">
                                ${product.price.toFixed(2)}
                            </span>
                        )}
                    </div>

                </div>

                {/* Title */}
                <h2
                    onClick={() => navigate(`/products/${product.id}`)}
                    className="font-inter text-2xl font-semibold leading-snug text-(--text-color) line-clamp-2 min-h-16 cursor-pointer"
                >
                    {product.title}
                </h2>

                {/* Description */}
                <p className="font-space text-sm leading-relaxed text-(--text-muted) line-clamp-2 mt-2">
                    {product.description}
                </p>

                {/* Add to Cart - Mobile */}
                <button className="w-full flex lg:hidden items-center justify-center gap-2 py-3 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide mt-6 cursor-pointer">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>

            </div>

        </article>
    );
};

export default ProductCards;