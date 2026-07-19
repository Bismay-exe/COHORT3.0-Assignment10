import { Heart, ShoppingBag, Star } from "lucide-react";

const ProductCards = ({ product }) => {
    return (
        <article className="group relative w-full overflow-hidden rounded-3xl border border-(--border-color) bg-(--secondary-bg-color) transition-all duration-500 hover:-translate-y-1">

            {/* Image Section */}
            <div className="relative aspect-4/5 overflow-hidden bg-(--bg-secondary-color) p-8">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full border border-(--border-color) bg-(--text-color) text-(--bg-color) backdrop-blur-sm font-space text-xs tracking-wider capitalize">
                    {product.category}
                </span>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 p-3.5 flex items-center justify-center xborder border-(--border-color) bg-(--blur-text-color) text-(--text-muted) hover:text-(--red) backdrop-blur-sm hover:bg-(--red-bg) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer">
                    <Heart />
                </button>

                {/* Quick Add */}
                <button className="absolute bottom-4 left-4 right-4 hidden lg:flex items-center justify-center gap-2 py-3 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out cursor-pointer">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>
            </div>


            {/* Product Information */}
            <div className="p-5">

                {/* Rating */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                        <Star
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                        />

                        <span className="font-space text-sm text-(--text-color)">
                            {product.rating.rate}
                        </span>

                        <span className="font-space text-xs text-(--text-muted)">
                            ({product.rating.count})
                        </span>
                    </div>

                    <span className="font-space text-xl font-medium text-(--text-color)">
                        ${product.price}
                    </span>
                </div>


                {/* Title */}
                <h2 className="font-inter text-2xl font-semibold leading-snug text-(--text-color) line-clamp-2 min-h-16">
                    {product.title}
                </h2>


                {/* Description */}
                <p className="font-space text-sm leading-relaxed text-(--text-muted) line-clamp-2 mt-2">
                    {product.description}
                </p>

                {/* Quick Add */}
                <button className="w-full flex lg:hidden items-center justify-center gap-2 py-3 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide ease-out mt-6 cursor-pointer">
                    <ShoppingBag size={18} />
                    Add to Cart
                </button>

            </div>

        </article>
    );
};

export default ProductCards;