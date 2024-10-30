import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import backIcon from '../assets/left.png';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const categoryData = {
    "Office-Furniture": ["Desks", "Chairs", "Cabinets"],
    "Office-Supplies": ["Paper", "Pens", "Binders"],
    "Office-Machines": ["Printers", "Scanners", "Copiers"],
    "Office-Decor-&-Accessories": ["Lamps", "Plants", "Wall Art"],
};

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [sortOption, setSortOption] = useState("relevant");

    // Toggle category selection
    const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    // Toggle subcategory/type selection
    const handleTypeChange = (type) => {
        setSelectedTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    // Handle sorting selection
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Determine available types based on category selections
    const availableTypes = selectedCategories.length > 0
        ? Array.from(new Set(
            products
                .filter((product) => selectedCategories.includes(product.category))
                .map((product) => product.subCategory)
        ))
        : Array.from(new Set(products.map((product) => product.subCategory)));

    // Update filterProducts based on selected categories, types, search term, and sort option
    useEffect(() => {
        let filtered = products;

        // Filter by search term if it's non-empty and showSearch is true
        if (showSearch && search.trim()) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Filter by selected categories if any are chosen
        if (selectedCategories.length > 0) {
            filtered = filtered.filter((product) => selectedCategories.includes(product.category));
        }

        // Filter by selected types if any are chosen
        if (selectedTypes.length > 0) {
            filtered = filtered.filter((product) => selectedTypes.includes(product.subCategory));
        }

        // Apply sorting based on sortOption
        if (sortOption === "low-high") {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-low") {
            filtered = filtered.sort((a, b) => b.price - a.price);
        } else if (sortOption === "relevant") {
            filtered = filtered.sort((a, b) => b.date - a.date);
        }

        setFilterProducts(filtered);

        // Scroll to top when filters or sorting are applied
        window.scrollTo(0, 0);
    }, [products, selectedCategories, selectedTypes, sortOption, search, showSearch]);

    useEffect(() => {
        setFilterProducts(products);
    }, [products]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* Filter Options */}
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
                    FILTERS
                    <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={backIcon} alt="" />
                </p>
                {/* Category Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {Object.keys(categoryData).map((category) => (
                            <p className='flex gap-2' key={category}>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </p>
                        ))}
                    </div>
                </div>
                {/* Type Filter */}
                <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>TYPE</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        {availableTypes.map((type) => (
                            <p className='flex gap-2' key={type}>
                                <input
                                    className='w-3'
                                    type="checkbox"
                                    value={type}
                                    checked={selectedTypes.includes(type)}
                                    onChange={() => handleTypeChange(type)}
                                />
                                {type}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={"ALL"} text2={"ITEMS"} />
                    {/* Items Sort */}
                    <select className='border-2 border-gray-300 text-sm px-2' onChange={handleSortChange} value={sortOption}>
                        <option value="relevant">Sort by: Relevant</option>
                        <option value="low-high">Sort by: Low to High</option>
                        <option value="high-low">Sort by: High to Low</option>
                    </select>
                </div>
                {/* Map Items */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
