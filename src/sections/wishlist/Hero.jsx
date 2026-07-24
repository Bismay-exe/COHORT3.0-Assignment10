import { Heart } from "lucide-react";

const Hero = ({ wishlist }) => {
    return (
        <div className="relative pb-12 md:pb-16 flex flex-col items-center justify-center text-center overflow-hidden z-0">
            <h1 className="font-inter text-[6rem] md:text-[10rem] lg:text-[24rem] leading-[0.8] text-(--text-color) tracking-tighter">
                Wishlist.
            </h1>

            <p className="font-space text-xs md:text-sm text-(--text-muted) my-8 md:my-10 max-w-md mx-auto uppercase tracking-[0.3em]">
                Your curated collection of favorites. Ready when you are.
            </p>

            <div className="inline-flex items-center gap-3 bg-(--text-color) text-(--bg-color) px-6 py-3 rounded-xl shadow-2xl">
                <Heart size={18} className="fill-(--bg-color)" />
                <span className="font-space text-sm font-bold tracking-widest uppercase">
                    {wishlist.length} Items Saved
                </span>
            </div>

        </div>
    );
};

export default Hero;