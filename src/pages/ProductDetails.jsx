import axios from "axios";
import {
    ArrowLeft,
    Heart,
    Minus,
    Plus,
    ShoppingBag,
    Star,
    Truck,
    RotateCcw,
    ShieldCheck,
    Package,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetails = () => {
    const [singleProductData, setSingleProductData] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    const { id } = useParams();
    const navigate = useNavigate();

    const increaseQuantity = () => {
        setQuantity((prev) =>
            Math.min(prev + 1, singleProductData?.stock || 1)
        );
    };

    const decreaseQuantity = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const getSingleProductData = async () => {
        try {
            const res = await axios.get(
                `https://dummyjson.com/products/${id}`
            );

            setSingleProductData(res.data);
            setSelectedImage(res.data.thumbnail);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleProductData();
    }, [id]);

    if (!singleProductData) {
        return (
            <main className="flex-1 w-full min-h-screen bg-(--bg-color) text-(--text-color) flex items-center justify-center">
                <p className="font-space text-(--text-muted)">
                    Loading product...
                </p>
            </main>
        );
    }

    const discountedPrice =
        singleProductData.price *
        (1 - singleProductData.discountPercentage / 100);

    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color)">
            <section className="w-full max-w-[1920px] mx-auto px-4 md:px-8 py-8 md:py-14">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 font-space text-sm text-(--text-muted) hover:text-(--text-color) transition-colors duration-300 cursor-pointer mb-8"
                >
                    <ArrowLeft size={18} />
                    Back to products
                </button>

                {/* Product Section */}
                <div className="flex flex-col md:flex-row items-start gap-8 lg:gap-14">

                    {/* Left Section */}
                    <div className="w-full md:w-2/5 lg:w-1/2 md:sticky md:top-28 flex flex-col lg:flex-row-reverse">

                        {/* Main Product Image */}
                        <div className="relative w-full aspect-square flex items-center justify-center rounded-3xl border border-(--border-color) bg-[#f3f0e8] p-8 md:p-12 group overflow-hidden">
                            <img
                                src={selectedImage}
                                alt={singleProductData.title}
                                className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                        </div>

                        {/* Image Gallery */}
                        {singleProductData.images?.length > 1 && (
                            <div className="grid grid-cols-4 lg:grid-cols-1 lg:max-w-40 h-full lg:mr-8 gap-3 mt-3 lg:mt-0">
                                {singleProductData.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(image)}
                                        className={`aspect-square rounded-xl border overflow-hidden p-2 cursor-pointer transition-all duration-300 bg-[#f3f0e8]
                                            ${selectedImage === image
                                                ? "border-(--text-color)"
                                                : "border-(--border-color) opacity-60 hover:opacity-100"
                                            }
                                        `}
                                    >
                                        <img
                                            src={image}
                                            alt={`${singleProductData.title} ${index + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Information */}
                    <div className="w-full md:w-3/5 lg:w-1/2">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="font-space text-xs uppercase tracking-[0.25em] text-(--text-muted)">
                                {singleProductData.category}
                            </span>

                            {singleProductData.brand && (
                                <>
                                    <span className="w-8 h-px bg-(--border-color)" />

                                    <span className="font-space text-xs uppercase tracking-[0.25em] text-(--text-muted)">
                                        {singleProductData.brand}
                                    </span>
                                </>
                            )}
                        </div>


                        {/* Main Heading */}
                        <h1 className="font-inter text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-tighter mt-5 max-w-3xl">
                            {singleProductData.title}
                        </h1>


                        {/* Rating / Stock */}
                        <div className="flex items-center gap-5 mt-7">

                            <div className="flex items-center gap-2">
                                <Star
                                    size={17}
                                    className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="font-space">
                                    {singleProductData.rating}
                                </span>

                                <span className="font-space text-sm text-(--text-muted)">
                                    ({singleProductData.reviews.length})
                                </span>
                            </div>

                            <div className="w-px h-5 bg-(--border-color)" />

                            <div className="flex items-center gap-2">

                                <span
                                    className={`w-2 h-2 rounded-full ${singleProductData.stock <= 5
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                        }`}
                                />

                                <span className="font-space text-sm text-(--text-muted)">
                                    {singleProductData.availabilityStatus}
                                </span>

                            </div>

                        </div>


                        {/* Price Area */}
                        <div className="mt-10 pb-8 border-b border-(--border-color)">

                            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                Price
                            </p>
                            <div className="flex items-center justify-start gap-5">
                                <p className="font-inter text-5xl font-semibold tracking-tight mt-2">
                                    ${singleProductData.price.toFixed(2)}
                                </p>

                                <span className="px-3 py-1.5 rounded-full bg-(--red-bg) text-(--red) font-space text-sm">
                                    {singleProductData.discountPercentage}% OFF
                                </span>
                            </div>

                        </div>


                        {/* Description */}
                        <p className="font-space text-base md:text-lg leading-8 text-(--text-muted) mt-8 max-w-3xl">
                            {singleProductData.description}
                        </p>


                        {/* Tags */}
                        {singleProductData.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-5">
                                {singleProductData.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 rounded-full border border-(--border-color) font-space text-xs text-(--text-muted) capitalize"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}


                        {/* PURCHASE PANEL */}
                        <div className="relative mt-10 rounded-3xl border border-(--border-color) bg-linear-to-br from-(--bg-secondary-color) to-transparent p-5 md:p-7 overflow-hidden">

                            {/* Decorative text */}
                            <span className="absolute -right-4 -top-8 font-instrument italic text-9xl text-(--text-color) opacity-[0.03] pointer-events-none">
                                Buy
                            </span>


                            {/* Quantity Header */}
                            <div className="relative flex items-center justify-between">

                                <div>
                                    <p className="font-inter font-medium">
                                        Ready to order?
                                    </p>

                                    <p className="font-space text-xs text-(--text-muted) mt-1">
                                        {singleProductData.stock} pieces currently available
                                    </p>
                                </div>


                                {/* Quantity */}
                                <div className="flex items-center rounded-xl border border-(--border-color) bg-(--bg-color)">

                                    <button
                                        onClick={decreaseQuantity}
                                        className="p-3 cursor-pointer hover:bg-(--hover-bg-color) rounded-l-xl"
                                    >
                                        <Minus size={16} />
                                    </button>

                                    <span className="w-10 text-center font-space">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={increaseQuantity}
                                        className="p-3 cursor-pointer hover:bg-(--hover-bg-color) rounded-r-xl"
                                    >
                                        <Plus size={16} />
                                    </button>

                                </div>

                            </div>


                            {/* Add Cart */}
                            <div className="relative flex gap-3 mt-6">

                                <button className="group flex-1 flex items-center justify-between px-5 py-4 rounded-xl bg-(--text-color) text-(--bg-color) cursor-pointer">

                                    <div className="flex items-center gap-3">
                                        <ShoppingBag size={19} />

                                        <span className="font-space">
                                            Add to Cart
                                        </span>
                                    </div>

                                    <span className="font-space">
                                        ${(singleProductData.price * quantity).toFixed(2)}
                                    </span>

                                </button>


                                <button className="aspect-square p-4 rounded-xl border border-(--border-color) bg-(--bg-color) text-(--text-muted) hover:text-(--red) hover:bg-(--red-bg) transition-all cursor-pointer">
                                    <Heart size={20} />
                                </button>

                            </div>

                        </div>

                        {/* Additional Product Information */}
                        <div className="hidden mt-12">

                            {/* Product Details */}
                            <div>
                                <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                    Product Details
                                </p>

                                <div className="mt-6 space-y-4">

                                    <p className="font-space text-sm leading-relaxed text-(--text-muted)">
                                        Made by{" "}
                                        <span className="text-(--text-color)">
                                            {singleProductData.brand || "Unbranded"}
                                        </span>
                                        , this product weighs{" "}
                                        <span className="text-(--text-color)">
                                            {singleProductData.weight} kg
                                        </span>{" "}
                                        and measures{" "}
                                        <span className="text-(--text-color)">
                                            {singleProductData.dimensions?.width} ×{" "}
                                            {singleProductData.dimensions?.height} ×{" "}
                                            {singleProductData.dimensions?.depth} cm
                                        </span>
                                        .
                                    </p>

                                    <p className="font-space text-sm text-(--text-muted)">
                                        Product reference{" "}
                                        <span className="text-(--text-color)">
                                            {singleProductData.sku}
                                        </span>
                                    </p>

                                </div>
                            </div>


                            {/* Divider */}
                            <div className="w-full h-px bg-(--border-color) my-9" />


                            {/* Order Information */}
                            <div>

                                <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                    Good to know
                                </p>


                                <div className="mt-6 space-y-6">

                                    {/* Shipping */}
                                    <div className="flex items-start gap-4">

                                        <Truck
                                            size={19}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-(--text-muted)"
                                        />

                                        <div>
                                            <p className="font-inter text-sm font-medium">
                                                {singleProductData.shippingInformation}
                                            </p>

                                            <p className="font-space text-xs text-(--text-muted) mt-1">
                                                Shipping information
                                            </p>
                                        </div>

                                    </div>


                                    {/* Returns */}
                                    <div className="flex items-start gap-4">

                                        <RotateCcw
                                            size={19}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-(--text-muted)"
                                        />

                                        <div>
                                            <p className="font-inter text-sm font-medium">
                                                {singleProductData.returnPolicy}
                                            </p>

                                            <p className="font-space text-xs text-(--text-muted) mt-1">
                                                Return policy
                                            </p>
                                        </div>

                                    </div>


                                    {/* Warranty */}
                                    <div className="flex items-start gap-4">

                                        <ShieldCheck
                                            size={19}
                                            strokeWidth={1.5}
                                            className="mt-0.5 shrink-0 text-(--text-muted)"
                                        />

                                        <div>
                                            <p className="font-inter text-sm font-medium">
                                                {singleProductData.warrantyInformation}
                                            </p>

                                            <p className="font-space text-xs text-(--text-muted) mt-1">
                                                Product warranty
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Divider */}
                            <div className="w-full h-px bg-(--border-color) my-10" />


                            {/* Reviews */}
                            {singleProductData.reviews?.length > 0 && (

                                <div>

                                    {/* Reviews Heading */}
                                    <div className="flex items-end justify-between gap-5">

                                        <div>
                                            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                                Reviews
                                            </p>

                                            <h2 className="font-inter text-2xl font-semibold mt-2">
                                                What people are saying
                                            </h2>
                                        </div>


                                        {/* Overall Rating */}
                                        <div className="flex items-center gap-2">

                                            <Star
                                                size={16}
                                                className="fill-yellow-400 text-yellow-400"
                                            />

                                            <span className="font-space text-sm">
                                                {singleProductData.rating}
                                            </span>

                                            <span className="font-space text-xs text-(--text-muted)">
                                                / 5
                                            </span>

                                        </div>

                                    </div>


                                    {/* Review List */}
                                    <div className="mt-7">

                                        {singleProductData.reviews.map((review, index) => (

                                            <article
                                                key={index}
                                                className="py-6 border-t border-(--border-color)"
                                            >

                                                {/* Review Top */}
                                                <div className="flex items-center justify-between gap-5">

                                                    <div className="flex items-center gap-3">

                                                        {/* Initials */}
                                                        <span className="font-instrument italic text-2xl">
                                                            {review.reviewerName
                                                                .split(" ")
                                                                .map((name) => name[0])
                                                                .join("")
                                                                .slice(0, 2)}
                                                        </span>


                                                        <div>
                                                            <p className="font-inter text-sm font-medium">
                                                                {review.reviewerName}
                                                            </p>

                                                            <p className="font-space text-[11px] text-(--text-muted) mt-0.5">
                                                                Verified purchase
                                                            </p>
                                                        </div>

                                                    </div>


                                                    {/* Stars */}
                                                    <div className="flex gap-1">

                                                        {[1, 2, 3, 4, 5].map((star) => (

                                                            <Star
                                                                key={star}
                                                                size={13}
                                                                className={
                                                                    star <= review.rating
                                                                        ? "fill-yellow-400 text-yellow-400"
                                                                        : "text-(--text-muted)"
                                                                }
                                                            />

                                                        ))}

                                                    </div>

                                                </div>


                                                {/* Comment */}
                                                <p className="font-space text-base leading-relaxed mt-5">
                                                    “{review.comment}”
                                                </p>


                                                {/* Date */}
                                                <p className="font-space text-xs text-(--text-muted) mt-4">
                                                    {new Date(review.date).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            month: "long",
                                                            day: "numeric",
                                                            year: "numeric",
                                                        }
                                                    )}
                                                </p>

                                            </article>

                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>

                        {/* trying myself */}
                        {/* ===================================================== */}
                        {/* LOWER PRODUCT CONTENT                                 */}
                        {/* ===================================================== */}

                        <div className="mt-24 lg:mt-32">

                            {/* Intro */}
                            <div className="max-w-3xl">

                                <p className="font-space text-xs uppercase tracking-[0.25em] text-(--text-muted)">
                                    The Details
                                </p>

                                <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] leading-none mt-4">
                                    Everything you need
                                    <br />
                                    to know.
                                </h2>

                            </div>

                            {/* Specifications */}
                            <div className="mt-16 pt-8 border-t border-(--border-color)">
                                {/* Label */}
                                <span className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                    01 — Specifications
                                </span>
                                {/* Primary Specs */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 pt-12">

                                    <div>
                                        <p className="font-space text-xs text-(--text-muted)">
                                            Brand
                                        </p>

                                        <p className="font-inter text-xl mt-2">
                                            {singleProductData.brand || "Unbranded"}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="font-space text-xs text-(--text-muted)">
                                            SKU
                                        </p>

                                        <p className="font-space text-base mt-2">
                                            {singleProductData.sku}
                                        </p>
                                    </div>


                                    <div>
                                        <p className="font-space text-xs text-(--text-muted)">
                                            Weight
                                        </p>

                                        <p className="font-inter text-xl mt-2">
                                            {singleProductData.weight}
                                            <span className="text-sm text-(--text-muted) ml-1">
                                                kg
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                {/* Dimensions */}
                                <div className="mt-14">

                                    <p className="font-space text-xs text-(--text-muted)">
                                        Dimensions
                                    </p>

                                    <div className="flex flex-wrap items-baseline gap-3 mt-3">

                                        <span className="font-inter text-3xl md:text-5xl tracking-tight">
                                            {singleProductData.dimensions?.width}
                                        </span>

                                        <span className="font-instrument italic text-2xl text-(--text-muted)">
                                            ×
                                        </span>

                                        <span className="font-inter text-3xl md:text-5xl tracking-tight">
                                            {singleProductData.dimensions?.height}
                                        </span>

                                        <span className="font-instrument italic text-2xl text-(--text-muted)">
                                            ×
                                        </span>

                                        <span className="font-inter text-3xl md:text-5xl tracking-tight">
                                            {singleProductData.dimensions?.depth}
                                        </span>

                                        <span className="font-space text-sm text-(--text-muted)">
                                            cm
                                        </span>

                                    </div>

                                    <div className="flex gap-12 mt-3 font-space text-xs text-(--text-muted)">
                                        <span>Width</span>
                                        <span>Height</span>
                                        <span>Depth</span>
                                    </div>

                                </div>
                            </div>

                            {/* Services */}
                            <div className="gap-10 lg:gap-24 mt-20 pt-8 border-t border-(--border-color)">
                                    <span className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                        02 — Shopping with us
                                    </span>


                                <div className="grid sm:grid-cols-3 gap-8 pt-12">

                                    {/* Delivery */}
                                    <div>
                                        <Truck
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-(--text-muted)"
                                        />

                                        <h3 className="font-inter text-lg font-medium mt-6">
                                            Delivery
                                        </h3>

                                        <p className="font-space text-sm leading-relaxed text-(--text-muted) mt-2">
                                            {singleProductData.shippingInformation}
                                        </p>
                                    </div>

                                    <div>
                                        <ShieldCheck
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-(--text-muted)"
                                        />

                                        <h3 className="font-inter text-lg font-medium mt-6">
                                            Warranty
                                        </h3>

                                        <p className="font-space text-sm leading-relaxed text-(--text-muted) mt-2">
                                            {singleProductData.warrantyInformation}
                                        </p>
                                    </div>

                                    <div>
                                        <RotateCcw
                                            size={22}
                                            strokeWidth={1.5}
                                            className="text-(--text-muted)"
                                        />

                                        <h3 className="font-inter text-lg font-medium mt-6">
                                            Returns
                                        </h3>

                                        <p className="font-space text-sm leading-relaxed text-(--text-muted) mt-2">
                                            {singleProductData.returnPolicy}
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Reviews */}
                            {singleProductData.reviews?.length > 0 && (

                                <div className="mt-24 lg:mt-32 pt-8 border-t border-(--border-color)">

                                    {/* Review Header */}
                                    <div className="gap-10 lg:gap-24">

                                        <div>
                                            <span className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                                03 — Reviews
                                            </span>
                                        </div>


                                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">

                                            <div>

                                                <h2 className="font-inter text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
                                                    People have
                                                    <br />
                                                    spoken.
                                                </h2>

                                                <p className="font-space text-sm text-(--text-muted) mt-4">
                                                    Feedback from verified SkyMart customers.
                                                </p>

                                            </div>


                                            {/* Score */}
                                            <div className="sm:text-right">

                                                <span className="font-instrument italic text-7xl md:text-8xl leading-none">
                                                    {singleProductData.rating}
                                                </span>

                                                <div className="flex sm:justify-end gap-1 mt-3">

                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            size={15}
                                                            className={
                                                                star <= Math.round(singleProductData.rating)
                                                                    ? "fill-yellow-400 text-yellow-400"
                                                                    : "text-(--text-muted)"
                                                            }
                                                        />
                                                    ))}

                                                </div>

                                                <p className="font-space text-xs text-(--text-muted) mt-2">
                                                    Based on {singleProductData.reviews.length} reviews
                                                </p>

                                            </div>

                                        </div>

                                    </div>


                                    {/* Review List */}
                                    <div className="max-w-5xl ml-auto mt-16">

                                        {singleProductData.reviews.map((review, index) => (

                                            <article
                                                key={index}
                                                className="grid sm:grid-cols-[200px_1fr] gap-6 sm:gap-12 py-8 border-t border-(--border-color)"
                                            >

                                                {/* Customer */}
                                                <div>

                                                    <div className="flex items-center gap-3">

                                                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-(--text-color) text-(--bg-color) font-space text-xs">
                                                            {review.reviewerName
                                                                .split(" ")
                                                                .map((name) => name[0])
                                                                .join("")
                                                                .slice(0, 2)}
                                                        </div>

                                                        <div>
                                                            <p className="font-inter text-sm font-medium">
                                                                {review.reviewerName}
                                                            </p>

                                                            <p className="font-space text-[11px] text-(--text-muted) mt-0.5">
                                                                Verified buyer
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>


                                                {/* Review */}
                                                <div>

                                                    <div className="flex items-center justify-between gap-4">

                                                        <div className="flex gap-1">

                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    size={14}
                                                                    className={
                                                                        star <= review.rating
                                                                            ? "fill-yellow-400 text-yellow-400"
                                                                            : "text-(--text-muted)"
                                                                    }
                                                                />
                                                            ))}

                                                        </div>

                                                        <time className="font-space text-xs text-(--text-muted)">
                                                            {new Date(review.date).toLocaleDateString(
                                                                "en-US",
                                                                {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                }
                                                            )}
                                                        </time>

                                                    </div>


                                                    <p className="font-inter text-xl md:text-2xl leading-relaxed mt-5">
                                                        “{review.comment}”
                                                    </p>

                                                </div>

                                            </article>

                                        ))}

                                    </div>

                                </div>

                            )}

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;