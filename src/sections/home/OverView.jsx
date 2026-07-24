import { Boxes, LayoutGrid, ShoppingBag, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../../contexts/MyContext";

const OverView = ({ products, categories, cartItems, totalTopRated }) => {

    let { totalQuantity } = useContext(MyStore);

    return (
        <section className="py-24 md:py-32 bg-(--bg-color)">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                
                {/* Apple-style minimalist header */}
                <div className="text-center mb-20 md:mb-32">
                    <h2 className="font-inter text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-(--text-color)">
                        The numbers speak for themselves.
                    </h2>
                </div>

                {/* Pure Typography Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 text-center">
                    
                    {/* Total Products */}
                    <div className="flex flex-col items-center justify-center">
                        <ShoppingBag size={28} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <p className="font-inter text-6xl md:text-7xl font-medium tracking-tighter text-(--text-color) mb-3">
                            {products.length}
                        </p>
                        <span className="font-inter text-sm md:text-base text-(--text-muted) font-medium tracking-wide">
                            Total Products
                        </span>
                    </div>

                    {/* Top Rated */}
                    <div className="flex flex-col items-center justify-center">
                        <Star size={28} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <p className="font-inter text-6xl md:text-7xl font-medium tracking-tighter text-(--text-color) mb-3">
                            {totalTopRated}
                        </p>
                        <span className="font-inter text-sm md:text-base text-(--text-muted) font-medium tracking-wide">
                            Top Rated (4.5+)
                        </span>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-col items-center justify-center">
                        <LayoutGrid size={28} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <p className="font-inter text-6xl md:text-7xl font-medium tracking-tighter text-(--text-color) mb-3">
                            {categories.length}
                        </p>
                        <span className="font-inter text-sm md:text-base text-(--text-muted) font-medium tracking-wide">
                            Categories
                        </span>
                    </div>

                    {/* Cart Items */}
                    <div className="flex flex-col items-center justify-center">
                        <Boxes size={28} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <p className="font-inter text-6xl md:text-7xl font-medium tracking-tighter text-(--text-color) mb-3">
                            {totalQuantity}
                        </p>
                        <span className="font-inter text-sm md:text-base text-(--text-muted) font-medium tracking-wide">
                            Items in Cart
                        </span>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default OverView;