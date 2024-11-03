import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const { products } = useContext(ShopContext)
    const [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className="my-16 px-4 lg:px-0">
            {/* Section Title */}
            <div className="text-center py-10 space-y-3">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-12 h-[3px] bg-gray-800"></div>
                    {/* <p className="font-semibold text-sm uppercase tracking-wide text-gray-700">Latest Collection</p> */}
                </div>
                {/* <Title text1="Limited-Time" text2="Offer" /> */}
                <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-gray-900 text-medium sm:text-base leading-relaxed">
                    Elevate your workspace with essentials crafted for style and productivity. Don’t miss out!
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-10 px-4 sm:px-8 md:px-12 lg:px-0">
                {latestProducts.map((item, index) => (
                    <ProductItem 
                        key={index} 
                        id={item._id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    )
}

export default LatestCollection
