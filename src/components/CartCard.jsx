import { Minus, PackageMinus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../contexts/MyContext";
import toast from "react-hot-toast";

const CartCard = ({ product }) => {
    let { setCartItems, incrementQuantity, decrementQuantity } =
        useContext(MyStore);

    return (
        <div className="group flex gap-4 p-3 rounded-2xl border border-(--border-color) bg-(--bg-color)">
            {/* Product Image */}
            <div className="w-24 h-28 shrink-0 flex items-center justify-center rounded-xl bg-[#f3f0e8] p-3 overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                    {/* Category + Delete */}
                    <div className="flex items-start justify-between gap-2">
                        <p className="font-space text-xs tracking-wider capitalize text-(--text-muted)">
                            {product.category}
                        </p>

                        <button
                            onClick={() =>{
                                setCartItems((prev) =>
                                    prev.filter((item) => item.id !== product.id),
                                )
                                
                                toast.custom((t) => (
                                    <div
                                        className={`${t.visible ? 'animate-custom-enter' : 'animate-custom-leave'
                                            } max-w-md bg-(--red-bg) backdrop-blur-lg shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-(--red) ring-opacity-5 p-4`}
                                    >
                                        <div className="shrink-0 pt-0.5 flex items-center gap-2 text-(--red) font-inter font-semibold">
                                            <PackageMinus size={20} className="fill-(--red-bg)" />Product removed from cart
                                        </div>
                                    </div>
                                ));
                            }
                            }
                            className="shrink-0 text-(--text-muted) hover:text-(--red) transition-colors duration-300 cursor-pointer"
                        >
                            <Trash2 size={17} />
                        </button>
                    </div>

                    {/* Title */}
                    <h3 className="max-w-[90%] font-inter font-semibold text-sm leading-snug text-(--text-color) line-clamp-2 mt-1">
                        {product.title}
                    </h3>
                    <p className="font-space text-sm text-(--text-muted)">
                        ${product.price} each
                    </p>
                </div>

                {/* Price + Quantity */}
                <div className="flex items-end justify-between gap-3 mt-3">
                    <p className="font-space text-xl text-(--text-color)">
                        ${product.price * product.quantity}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center border border-(--border-color) rounded-lg overflow-hidden">
                        <button
                            onClick={() => decrementQuantity(product.id)}
                            className="p-1.5 hover:bg-(--hover-bg-color) transition-colors cursor-pointer"
                        >
                            <Minus size={14} />
                        </button>

                        <span className="w-7 text-center font-space text-xs text-(--text-color)">
                            {product.quantity}
                        </span>

                        <button
                            onClick={() => incrementQuantity(product.id)}
                            className="p-1.5 hover:bg-(--hover-bg-color) transition-colors cursor-pointer"
                        >
                            <Plus size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
