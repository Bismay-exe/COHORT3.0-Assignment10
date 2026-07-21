import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden py-16 md:py-24 border-b border-(--border-color)">
            {/* Background Text */}
            <span className="absolute right-0 top-1/2 -translate-y-1/2 font-instrument italic text-[clamp(8rem,20vw,22rem)] leading-none opacity-[0.025] pointer-events-none">
                SkyMart
            </span>

            <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                    <Sparkles size={15} className="text-(--text-muted)" />

                    <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                        Welcome to SkyMart
                    </p>
                </div>

                <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-semibold tracking-[-0.06em] leading-[0.95] max-w-5xl">
                    Find what you need.
                    <br />
                    <span className="font-instrument italic font-normal">
                        Love what you find.
                    </span>
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-10">
                    <p className="font-space text-sm md:text-base leading-relaxed text-(--text-muted) max-w-lg">
                        Explore products across dozens of categories, discover top-rated
                        picks, and find something new every time you visit.
                    </p>

                    <button
                        onClick={() => navigate("/products")}
                        className="group flex items-center gap-4 font-space text-sm cursor-pointer"
                    >
                        Explore all products
                        <span className="w-10 h-10 flex items-center justify-center rounded-full bg-(--text-color) text-(--bg-color)">
                            <ArrowRight
                                size={17}
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
