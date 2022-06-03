import {React, createContext, useContext, useReducer} from 'react';
import { productListingReducer } from '../reducers/productListingReducer';

const ProductListingContext = createContext();

const useProductListing = () => useContext(ProductListingContext);

const ProductListingProvider = ({children}) => {
    const [productListingState, productListingDispatch] = useReducer(productListingReducer, { data: [] });

    return (
        <ProductListingContext.Provider value={{productListingState, productListingDispatch}}>
            {children}
        </ProductListingContext.Provider>
    )
};

export {useProductListing, ProductListingProvider};