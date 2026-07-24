import { useContext } from "react";
import { MyStore } from "../contexts/MyContext";
import { ArrowRight, PackageCheck, ShoppingBag, ShoppingCart, X } from "lucide-react";
import CartCard from "./CartCard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const CartSidebar = () => {
    let { isCartOpen, setIsCartOpen, cartItems, totalQuantity, setCartItems } =
        useContext(MyStore);

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const navigate = useNavigate();

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={() => setIsCartOpen(false)}
                className={`
                    fixed inset-0 z-40
                    bg-(--text-color)/10 backdrop-blur-sm
                    transition-all duration-500
                    ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
            />

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 right-0 z-50
                    h-dvh w-full sm:w-120
                    flex flex-col
                    bg-(--bg-secondary-color)
                    border-l border-(--border-color)
                    text-(--text-color)
                    transition-transform duration-500 ease-in-out
                    ${isCartOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-5 xborder-b border-(--border-color)">
                    <div className="w-full">
                        <div className="w-full flex justify-between items-center gap-4">
                            <h2 className="font-instrument italic text-4xl flex items-center gap-3">
                                <ShoppingCart className="h-12 w-12 p-3 backdrop-blur-sm text-(--text-color) bg-(--hover-bg-color) rounded-xl" />
                                Your Cart
                            </h2>

                            {/* Close */}
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-3 rounded-xl text-(--text-muted) hover:text-(--text-color) hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer"
                            >
                                <X size={26} />
                            </button>
                        </div>

                        <p className="font-space text-xs text-(--text-muted) ml-16 mt-0.5">
                            {cartItems.length} items | {totalQuantity} quantity
                        </p>
                    </div>
                </div>

                {/* Cart Content */}
                <div className="flex-1 overflow-y-auto custom-scrollbar p-5">
                    {cartItems.length > 0 ? (
                        <div className="flex flex-col gap-3">
                            {cartItems.map((elem) => (
                                <CartCard key={elem.id} product={elem} />
                            ))}
                        </div>
                    ) : (
                        /* Empty Cart */
                        <div className="h-full flex flex-col items-center justify-center text-center px-8">
                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-(--bg-secondary-color) border border-(--border-color)">
                                <ShoppingBag size={30} className="text-(--text-muted)" />
                            </div>

                            <h3 className="font-inter text-xl font-semibold mt-5">
                                Your cart is empty
                            </h3>

                            <p className="font-space text-sm leading-relaxed text-(--text-muted) max-w-60 mt-2">
                                Looks like you haven't added anything to your cart yet.
                            </p>

                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-6 px-6 py-3 rounded-xl bg-(--text-color) text-(--bg-color) font-space cursor-pointer"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    )}
                </div>

                {/* Cart Footer */}
                {cartItems.length > 0 && (
                    <div className="p-5 border-t border-(--border-color) bg-linear-to-t from-(--bg-secondary-color) to-transparent">
                        {/* Subtotal */}
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-inter font-semibold text-lg">Subtotal</p>

                                <p className="font-space text-xs text-(--text-muted) mt-1">
                                    Shipping calculated at checkout
                                </p>
                            </div>

                            <p className="font-space text-2xl">${subtotal.toFixed(2)}</p>
                        </div>

                        {/* Checkout */}
                        <button
                            onClick={() => {
                                setCartItems([]);
                                setIsCartOpen(false);
                                navigate("/products");
                                toast.custom((t) => (
                                    <div
                                        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
                                            } max-w-md bg-(--green-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--green) ring-opacity-5 p-4`}
                                    >
                                        <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--green) font-inter font-semibold">
                                            <PackageCheck size={20} className="fill-(--green-bg)" /> Order placed! 🎉
                                        </div>
                                    </div>
                                ));
                            }}
                            className="w-full flex items-center justify-center gap-2 mt-5 py-4 rounded-xl bg-(--text-color) text-(--bg-color) font-space tracking-wide group cursor-pointer">
                            Checkout
                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>

                        {/* Continue Shopping */}
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="w-full mt-3 py-3 font-space text-sm text-(--text-muted) hover:text-(--text-color) transition-colors cursor-pointer"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </aside>
        </>
    );
};

export default CartSidebar;
