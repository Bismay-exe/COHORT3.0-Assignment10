import {
    ArrowLeft,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
    Truck,
    RotateCcw,
    ShieldCheck
} from "lucide-react";
import { useState } from "react";

const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    return (
        <main className="min-h-screen w-full bg-(--bg-color) text-(--text-color)">

            <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-14">

                {/* Back Button */}
                <button className="flex items-center gap-2 font-space text-sm text-(--text-muted) hover:text-(--text-color) transition-colors duration-300 cursor-pointer mb-8">
                    <ArrowLeft size={18} />
                    Back to products
                </button>


                {/* Product Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

                    {/* Product Image */}
                    <div className="relative min-h-125 lg:min-h-160 flex items-center justify-center overflow-hidden rounded-3xl border border-(--border-color) bg-(--bg-secondary-color) p-10 md:p-16 group">

                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full max-h-125 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Category */}
                        <span className="absolute top-5 left-5 px-4 py-2 rounded-full bg-(--text-color) text-(--bg-color) font-space text-xs tracking-wider capitalize">
                            {product.category}
                        </span>

                        {/* Wishlist */}
                        <button className="absolute top-5 right-5 p-3.5 flex items-center justify-center border border-(--border-color) bg-(--blur-text-color) text-(--text-muted) hover:text-(--red) backdrop-blur-sm hover:bg-(--red-bg) rounded-xl transition-all duration-300 cursor-pointer">
                            <Heart size={22} />
                        </button>

                    </div>


                    {/* Product Information */}
                    <div className="flex flex-col justify-center">

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-5">

                            <div className="flex items-center gap-1">
                                <Star
                                    size={18}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="font-space text-sm">
                                    {product.rating.rate}
                                </span>
                            </div>

                            <span className="text-(--text-muted)">
                                •
                            </span>

                            <span className="font-space text-sm text-(--text-muted)">
                                {product.rating.count} reviews
                            </span>

                        </div>


                        {/* Title */}
                        <h1 className="font-inter text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                            {product.title}
                        </h1>


                        {/* Price */}
                        <p className="font-space text-3xl md:text-4xl mt-6">
                            ${product.price}
                        </p>


                        {/* Divider */}
                        <div className="w-full h-px bg-(--border-color) my-7" />


                        {/* Description */}
                        <div>
                            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted) mb-3">
                                Description
                            </p>

                            <p className="font-space text-base md:text-lg leading-relaxed text-(--text-muted)">
                                {product.description}
                            </p>
                        </div>


                        {/* Quantity */}
                        <div className="mt-8">

                            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted) mb-3">
                                Quantity
                            </p>

                            <div className="inline-flex items-center border border-(--border-color) rounded-xl overflow-hidden">

                                <button
                                    onClick={decreaseQuantity}
                                    className="p-3 hover:bg-(--hover-bg-color) transition-colors duration-300 cursor-pointer"
                                >
                                    <Minus size={18} />
                                </button>

                                <span className="w-12 text-center font-space">
                                    {quantity}
                                </span>

                                <button
                                    onClick={increaseQuantity}
                                    className="p-3 hover:bg-(--hover-bg-color) transition-colors duration-300 cursor-pointer"
                                >
                                    <Plus size={18} />
                                </button>

                            </div>

                        </div>


                        {/* Actions */}
                        <div className="flex gap-3 mt-8">

                            <button className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide hover:scale-[0.99] transition-transform duration-300 cursor-pointer">
                                <ShoppingBag size={20} />
                                Add to Cart
                            </button>

                            <button className="p-4 rounded-xl border border-(--border-color) text-(--text-muted) hover:text-(--red) hover:bg-(--red-bg) transition-all duration-300 cursor-pointer">
                                <Heart size={21} />
                            </button>

                        </div>


                        {/* Benefits */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">

                            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-4 rounded-2xl border border-(--border-color)">
                                <Truck size={20} />

                                <div>
                                    <p className="font-space text-sm">
                                        Free Shipping
                                    </p>

                                    <p className="font-space text-xs text-(--text-muted) mt-1">
                                        On all orders
                                    </p>
                                </div>
                            </div>


                            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-4 rounded-2xl border border-(--border-color)">
                                <RotateCcw size={20} />

                                <div>
                                    <p className="font-space text-sm">
                                        Easy Returns
                                    </p>

                                    <p className="font-space text-xs text-(--text-muted) mt-1">
                                        30 day returns
                                    </p>
                                </div>
                            </div>


                            <div className="flex sm:flex-col items-center sm:items-start gap-3 p-4 rounded-2xl border border-(--border-color)">
                                <ShieldCheck size={20} />

                                <div>
                                    <p className="font-space text-sm">
                                        Secure Payment
                                    </p>

                                    <p className="font-space text-xs text-(--text-muted) mt-1">
                                        100% protected
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
};

export default Product;