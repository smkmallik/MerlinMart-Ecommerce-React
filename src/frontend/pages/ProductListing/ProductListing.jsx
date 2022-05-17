import React from 'react';
import Filter from '../../components/Filter/Filter';
import './ProductListing.css';
import { ProductContainer } from '../../components/ProductContainer/ProductContainer';

const ProductListing = () => {
    return (
        <div className="productlisting">
            <Filter />
            <ProductContainer />
        </div>
    )
}

export default ProductListing;