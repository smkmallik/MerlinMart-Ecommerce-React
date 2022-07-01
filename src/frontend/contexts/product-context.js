import {React, createContext, useContext, useReducer} from 'react';
import { productListingReducer } from '../reducers/productListingReducer';

const ProductListingContext = createContext();

const useProductListing = () => useContext(ProductListingContext);

const ProductListingProvider = ({children}) => {
    const [productListingState, productListingDispatch] = useReducer(
        productListingReducer, 
        { 
            data: [],
            sortBy: "",
            categories: {
                mobiles: false,
                laptops: false,
                tablets: false,
                watches: false,
                desktops: false
            },
            price: 5000,
            rating: 1
        }
    );

    return (
        <ProductListingContext.Provider value={{productListingState, productListingDispatch}}>
            {children}
        </ProductListingContext.Provider>
    )
};

export {useProductListing, ProductListingProvider};