import { Boxes, LayoutGrid, ShoppingBag, Star } from "lucide-react";

const OverView = ({ products, categories, cartItems, totalTopRated }) => {
    return (
        <section className="py-10 border-b border-(--border-color)">
            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted) mb-7">
                Store Overview
            </p>

            <div className="flex flex-wrap">
                {/* Total Products */}
                <div className="w-1/2 lg:w-1/4 py-4 lg:pr-8">
                    <div className="flex items-center gap-2 text-(--text-muted)">
                        <ShoppingBag size={15} />

                        <span className="font-space text-xs">Total Products</span>
                    </div>

                    <p className="font-inter text-4xl md:text-5xl font-semibold tracking-tight mt-3">
                        {products.length}
                    </p>
                </div>

                {/* Cart */}
                <div className="w-1/2 lg:w-1/4 py-4 lg:px-8 lg:border-l border-(--border-color)">
                    <div className="flex items-center gap-2 text-(--text-muted)">
                        <Boxes size={15} />

                        <span className="font-space text-xs">Cart Items</span>
                    </div>

                    <p className="font-inter text-4xl md:text-5xl font-semibold tracking-tight mt-3">
                        {cartItems}
                    </p>
                </div>

                {/* Top Rated */}
                <div className="w-1/2 lg:w-1/4 py-4 lg:px-8 lg:border-l border-(--border-color)">
                    <div className="flex items-center gap-2 text-(--text-muted)">
                        <Star size={15} />

                        <span className="font-space text-xs">Top Rated</span>
                    </div>

                    <p className="font-inter text-4xl md:text-5xl font-semibold tracking-tight mt-3">
                        {totalTopRated}
                    </p>

                    <p className="font-space text-[11px] text-(--text-muted) mt-1">
                        Rated 4.5 or higher
                    </p>
                </div>

                {/* Categories */}
                <div className="w-1/2 lg:w-1/4 py-4 lg:pl-8 lg:border-l border-(--border-color)">
                    <div className="flex items-center gap-2 text-(--text-muted)">
                        <LayoutGrid size={15} />

                        <span className="font-space text-xs">Categories</span>
                    </div>

                    <p className="font-inter text-4xl md:text-5xl font-semibold tracking-tight mt-3">
                        {categories.length}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OverView;
