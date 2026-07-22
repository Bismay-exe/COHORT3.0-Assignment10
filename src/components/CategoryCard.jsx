import { ArrowRight, ArrowUpRight } from "lucide-react";

const CategoryCard = ({ category, index, categoryImage, onClick }) => {
    return (
        <article
            onClick={onClick}
            className="aspect-video lg:aspect-square group relative overflow-hidden rounded-2xl md:rounded-3xl border border-(--border-color) hover:border-(--text-muted) bg-(--bg-secondary-color) transition-all duration-300 ease cursor-pointer"
        >
            {/* Category Info */}
            <div className="relative z-10 p-4 sm:p-5 md:p-6 flex justify-between items-start @container">
                <p className="w-1/2 font-inter text-[8cqw] md:text-[12cqw] font-medium text-(--text-color) md:text-(--text-muted) group-hover:text-(--text-color)">
                    {category.name}
                </p>

                <div className="hidden md:flex items-center gap-1 font-space text-xs text-(--text-muted) group-hover:text-(--text-color) transition-colors duration-300">
                    {/* Explore category */}
                    <ArrowRight
                        size={24}
                        className="transition-transform duration-300 group-hover:rotate-0 -rotate-45"
                    />
                </div>
            </div>

            {/* Category Product Image */}
            {categoryImage && (
                <img
                    src={categoryImage}
                    alt={category.name}
                    className="
                        absolute
                        right-[-5%]
                        bottom-[-10%]
                        w-[70%]
                        h-[95%]
                        object-contain
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-120
                    "
                />
            )}

            {/* Category Number */}
            <span className="hidden absolute left-6 bottom-5 font-space text-[10px] tracking-widest text-(--text-muted)">
                {String(index + 1).padStart(2, "0")}
            </span>
        </article>
    );
};

export default CategoryCard;
