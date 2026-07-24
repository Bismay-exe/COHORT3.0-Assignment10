import React from 'react'
import WishListCards from '../../components/WishListCards'
import { Heart } from 'lucide-react'

const WishlistsProducts = ({ wishlist }) => {
    return wishlist.length === 0 ? (
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
    )
}

export default WishlistsProducts
