import React, {useEffect} from 'react';
import { ProductCard } from '../Card/Card';
import { products } from '../../../backend/db/products';
import './ProductContainer.css';
import { useProductListing } from '../../contexts/product-context';
import { actionTypes } from '../../reducers/actionTypes';
import { getProductListService } from '../../services/getProductListService';
// import { getSortedProducts, getRatedProducts } from '../../utils/productFilters';
import {getRatedProducts} from '../../utils/productFilters/rating';
import { getSortedProducts } from '../../utils/productFilters/sortBy';
import { getFilteredProducts } from '../../utils/productFilters/category';
import { getPriceProducts } from '../../utils/productFilters/priceRange';

export const ProductContainer = () => {

    const {productListingState, productListingDispatch} = useProductListing();

    const {data, sortBy, categories, price, rating} = productListingState;
    const {mobiles, laptops, watches, desktops, tablets} = categories;


    useEffect(() => {
        (async () => {
                const products = await getProductListService();
                // products = products.map(item => ({
                //     ...item,
                //     discountedPrice: item.price - item.price * (item.price / 100),
                // }))
                if(products) {
                    productListingDispatch({
                        type: actionTypes.LOAD_DATA,
                        payload: products
                    });
                }
            }
        )();
    }, []);

    const pricedProducts = getPriceProducts(data, price);
    // const categoryProducts = getFilteredProducts(pricedProducts, categories);
    const ratedProducts = getRatedProducts(pricedProducts, rating);
    const finalFilteredProducts = getSortedProducts(ratedProducts, sortBy);

    return (
        <section className='products'>
            {
                finalFilteredProducts.map(({id, title, price, rating}) => {
                    return (
                        <ProductCard key={id} title={title} price={price} rating={rating} />
                    )
                })
            }
        </section>
    )
}