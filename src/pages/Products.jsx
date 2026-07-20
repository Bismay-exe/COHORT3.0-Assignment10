import React, { useContext } from 'react'
import ProductCards from '../components/ProductCards'
import { MyStore } from '../contexts/MyContext'

const Products = () => {

  let { productsData } = useContext(MyStore);

  return (
    <div className="max-w-[1920px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4 md:p-8">
      {productsData.map((elem) => (
        <ProductCards key={elem.id} product={elem} />
      ))}
    </div>
  )
}

export default Products
