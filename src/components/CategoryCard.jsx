import { ArrowRight, ArrowUpRight } from "lucide-react";

const CategoryCard = ({ category, index, categoryImage, onClick }) => {
    return (
        <article
            onClick={onClick}
            className="aspect-video lg:aspect-square group relative overflow-hidden rounded-2xl md:rounded-3xl border border-(--border-color) bg-(--bg-secondary-color) cursor-pointer"
        >
            {/* Category Info */}
            <div className="relative z-10 p-4 sm:p-5 md:p-6 flex justify-between items-start">
                <p className="w-1/2 font-inter text-sm sm:text-md md:text-2xl font-medium">
                    {category.name} 
                </p>

                <div className="hidden md:flex items-center gap-1 font-space text-xs text-(--text-muted) group-hover:text-(--text-color) transition-colors duration-300">
                    {/* Explore category */}
                    <ArrowRight
                        size={24}
                        className="transition-transform duration-300 group-hover:-rotate-45"
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
                        group-hover:scale-110
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
