import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "KES";
    const delivery_fee = 10;
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId) => {
        setCartItems((prevCartItems) => {
            const updatedCart = { ...prevCartItems };
            updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
            return updatedCart;
        });
    };

    const getCartCount = () => {
        return Object.values(cartItems).reduce((totalCount, quantity) => {
            if (typeof quantity === 'number' && quantity > 0) {
                return totalCount + quantity;
            }
            return totalCount;
        }, 0);
    };

    const updateQuantity = (itemId, quantity) => {
        if (quantity <= 0) {
            setCartItems((prevCartItems) => {
                const updatedCart = { ...prevCartItems };
                delete updatedCart[itemId];
                return updatedCart;
            });
        } else {
            setCartItems((prevCartItems) => ({
                ...prevCartItems,
                [itemId]: quantity 
            }));
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                const quantity = cartItems[itemId];
                if (quantity > 0) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
        }
        return totalAmount;
    };
    

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity, 
        getCartAmount, navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
