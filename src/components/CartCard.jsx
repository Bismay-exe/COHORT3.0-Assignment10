import { Minus, Plus, Trash2 } from "lucide-react";

const CartCard = ({ product }) => {
    return (
        <div className="group flex gap-4 p-3 rounded-2xl border border-(--border-color) bg-(--secondary-bg-color)">

            {/* Product Image */}
            <div className="w-24 h-28 shrink-0 flex items-center justify-center rounded-xl bg-(--bg-secondary-color) p-3 overflow-hidden">
                <img
                    src={product.image}
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
                            className="shrink-0 text-(--text-muted) hover:text-(--red) transition-colors duration-300 cursor-pointer"
                        >
                            <Trash2 size={17} />
                        </button>

                    </div>


                    {/* Title */}
                    <h3 className="font-inter font-semibold text-sm leading-snug text-(--text-color) line-clamp-2 mt-1">
                        {product.title}
                    </h3>
                </div>


                {/* Price + Quantity */}
                <div className="flex items-end justify-between gap-3 mt-3">

                    <p className="font-space text-lg text-(--text-color)">
                        ${product.price}
                    </p>


                    {/* Quantity */}
                    <div className="flex items-center border border-(--border-color) rounded-lg overflow-hidden">

                        <button className="p-1.5 hover:bg-(--hover-bg-color) transition-colors cursor-pointer">
                            <Minus size={14} />
                        </button>

                        <span className="w-7 text-center font-space text-xs text-(--text-color)">
                            1
                        </span>

                        <button className="p-1.5 hover:bg-(--hover-bg-color) transition-colors cursor-pointer">
                            <Plus size={14} />
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default CartCard;