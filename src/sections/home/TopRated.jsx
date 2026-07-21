import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import ProductCards from "../../components/ProductCards";

const TopRated = ({ topRatedProducts }) => {
    const navigate = useNavigate();

    return (
        <section className="py-16 md:py-24">
            <div className="flex items-end justify-between gap-5 mb-10">
                <div>
                    <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                        Customer Favorites
                    </p>

                    <h2 className="font-inter text-3xl md:text-5xl font-semibold tracking-[-0.04em] mt-2">
                        Top rated.
                    </h2>
                </div>

                <button
                    onClick={() => navigate("/products")}
                    className="group flex items-center gap-2 font-space text-xs text-(--text-muted) hover:text-(--text-color) transition-colors cursor-pointer"
                >
                    View all
                    <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </button>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {topRatedProducts.map((product) => (
                    <ProductCards key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default TopRated;
