import { Heart } from "lucide-react";

const Hero = ({ wishlist }) => {
    return (
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
    )
}

export default Hero
