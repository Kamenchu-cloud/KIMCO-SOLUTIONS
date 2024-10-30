import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => { // Add props as an argument

    const currency = "KES";
    const delivery_fee = 10;

    const value = {
        products, currency, delivery_fee
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Now this will work correctly */}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
