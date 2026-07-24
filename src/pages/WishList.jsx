import { useContext } from "react";
import { MyStore } from "../contexts/MyContext";
import Hero from "../sections/wishlist/Hero";
import WishlistsProducts from "../sections/wishlist/WishlistsProducts";

const WishList = () => {
    const { wishlist } = useContext(MyStore);
    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color) max-w-[1920px] mx-auto px-4 md:px-8 py-12 md:py-16">
                <Hero wishlist={wishlist} />

                <WishlistsProducts wishlist={wishlist} />
        </main>
    );
};

export default WishList;
