import { Heart } from "lucide-react";
import WishListCards from "../components/WishListCards";
import { useContext } from "react";
import { MyStore } from "../contexts/MyContext";

const WishList = () => {
    const { wishlist } = useContext(MyStore);
    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color)">
            <section className="max-w-[1920px] mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-(--border-color) pb-8">
                    <div>
                        <p className="font-space text-xs uppercase tracking-[0.25em] text-(--text-muted)">
                            Your Collection
                        </p>

                        <h1 className="font-inter text-5xl md:text-7xl font-semibold tracking-tighter mt-4">
                            Wishlist.
                        </h1>

                        <p className="font-space text-sm md:text-base text-(--text-muted) mt-5 max-w-lg leading-relaxed">
                            Save products you love and come back whenever you're ready.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl border border-(--border-color) flex items-center justify-center">
                            <Heart size={24} />
                        </div>

                        <div>
                            <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                                Saved Products
                            </p>

                            <h2 className="font-inter text-4xl font-semibold">
                                {wishlist.length}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Empty State */}

                {wishlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-40">
                        <Heart
                            size={80}
                            strokeWidth={1.2}
                            className="text-(--text-muted)"
                        />

                        <h2 className="font-inter text-3xl font-semibold mt-8">
                            Your wishlist is empty.
                        </h2>

                        <p className="font-space text-sm text-(--text-muted) mt-3">
                            Save products to find them quickly later.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                        {wishlist.map((product) => (
                            <WishListCards key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default WishList;
