import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../contexts/MyContext";

const ProductCards = ({ product, isInCart }) => {
    let { cartItems, setCartItems, setIsCartOpen, incrementQuantity, decrementQuantity } = useContext(MyStore);
    const navigate = useNavigate();

    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    const addToCart = () => {
        setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
        setIsCartOpen(true);
    };

    return (
        <article className="group relative w-full overflow-hidden rounded-3xl border border-(--border-color) bg-(--secondary-bg-color) transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_var(--box-shadow-color)] hover:border-(--text-color)">
            {/* Image Section */}
            <div
                onClick={() => navigate(`/products/${product.id}`)}
                className="relative overflow-hidden bg-(--bg-secondary-color) p-8 cursor-pointer"
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
            </div>

            {/* Product Information */}
            <div className="p-5">
                {/* Rating */}
                <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-1.5">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />

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

                {/* Add to Cart */}

                <div className="relative flex gap-3 mt-6">
                    {isInCart ? (
                        <div
                            className="group flex-1 flex items-center justify-center gap-2 p-1 h-14 rounded-xl border border-(--border-color) bg-(--text-color) text-(--bg-cololg"
                        >
                            <button
                                onClick={() => decrementQuantity(product.id)}
                                className="group flex-1 flex items-center justify-center px-5 h-full rounded-lg hover:bg-(--bg-color)/15 text-(--bg-color) cursor-pointer"
                            >
                                <Minus size={24} />
                            </button>

                            <span className="group flex-1 flex items-center justify-center px-5 h-full text-(--bg-color)">
                                {cartItems.find((item) => item.id === product.id)?.quantity}
                            </span>

                            <button
                                onClick={() => incrementQuantity(product.id)}
                                className="group flex-1 flex items-center justify-center px-5 h-full rounded-lg hover:bg-(--bg-color)/15 text-(--bg-color) cursor-pointer"
                            >
                                <Plus size={24} />
                            </button>

                        </div>
                    ) : (
                        <button
                            onClick={addToCart}
                            className="group flex-1 flex items-center justify-center px-5 py-4 rounded-xl bg-(--text-color) text-(--bg-color) cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                <ShoppingBag size={19} />

                                <span className="font-space">Add to Cart</span>
                            </div>
                        </button>
                    )}

                    <button className="aspect-square p-4 rounded-xl border border-(--border-color) bg-(--bg-color) text-(--text-muted) hover:text-(--red) hover:bg-(--red-bg) hover:border-(--red) transition-all group cursor-pointer">
                        <Heart
                            size={20}
                            className="fill-currents group-hover:shadow-[0_25px_50px_-12px_var(--red)]"
                        />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCards;
