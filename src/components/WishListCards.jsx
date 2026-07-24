import { HeartOff, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../contexts/MyContext";

const WishListCards = ({ product }) => {
    const navigate = useNavigate();

    const {
        cartItems,
        wishlist,
        toggleWishlist,
        addToCart,
        incrementQuantity,
        decrementQuantity,
    } = useContext(MyStore);

    const cartItem = cartItems.find((item) => item.id === product.id);
    const isInCart = !!cartItem;
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    return (
        <article className="group flex gap-4 rounded-3xl border border-(--border-color) bg-(--secondary-bg) p-2 md:p-3 transition-all duration-300 hover:border-(--text-muted) z-10">
            {/* IMAGE */}
            <div
                onClick={() => navigate(`/products/${product.id}`)}
                className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl bg-[#f3f0e8] flex items-center justify-center cursor-pointer"
            >
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* CONTENT */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <p className="font-space text-[11px] uppercase tracking-[0.15em] text-(--text-muted)">
                                {product.category}
                            </p>

                            <h2
                                onClick={() => navigate(`/products/${product.id}`)}
                                className="font-inter text-base sm:text-xl font-semibold leading-tight mt-1 line-clamp-2 cursor-pointer hover:underline"
                            >
                                {product.title}
                            </h2>

                            <p className="hidden :block font-space text-[11px] uppercase tracking-[0.15em] text-(--text-muted) line-clamp-2 md:line-clamp-2">
                                {product.description}
                            </p>
                        </div>

                        <button
                            onClick={() => toggleWishlist(product)}
                            className="shrink-0 w-10 h-10 rounded-xl bg-(--red-bg) md:bg-(--bg-color) hover:bg-(--red-bg) md:text-(--text-color) text-(--red) hover:text-(--red) transition-all cursor-pointer"
                        >
                            <HeartOff size={16} className="mx-auto" />
                        </button>
                    </div>

                    <div className="hidden xmd:flex items-center gap-2 mt-3">
                        <Star size={14} className="fill-yellow-400 text-yellow-400" />

                        <span className="font-space text-xs">{product.rating}</span>
                    </div>
                </div>

                <div className="flex items-end justify-between gap-3">
                    <div>
                        <p className="font-space text-[11px] uppercase tracking-[0.15em] text-(--text-muted)">
                            Price
                        </p>

                        <div className="flex justify-start items-center gap-3 mt-1">
                            <h3 className="font-inter text-xl sm:text-2xl font-semibold">
                                ${product.price}
                            </h3>

                            <span className="rounded-full md:bg-(--green-bg) text-(--green) font-space text-[10px] sm:px-3 sm:py-1.5 sm:text-xs leading-none">
                                {product.discountPercentage}% OFF
                            </span>
                        </div>
                    </div>

                    {isInCart ? (
                        <div className="flex items-center rounded-xl bg-(--text-color) text-(--bg-color) overflow-hidden">
                            <button
                                onClick={() => decrementQuantity(product.id)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-black/10 cursor-pointer"
                            >
                                <Minus size={16} />
                            </button>

                            <span className="w-10 text-center font-space text-sm">
                                {cartItem.quantity}
                            </span>

                            <button
                                onClick={() => incrementQuantity(product.id)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-black/10 cursor-pointer"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => addToCart(product)}
                            className="flex items-center gap-2 rounded-xl bg-(--text-color) text-(--bg-color) px-4 py-3 hover:scale-[0.98] transition-transform cursor-pointer"
                        >
                            <ShoppingBag size={17} />

                            <span className="hidden sm:block font-space text-sm">Add</span>
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

export default WishListCards;
