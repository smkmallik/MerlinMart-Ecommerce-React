import React, {useContext, useEffect, useReducer} from 'react';
import { ProductCard } from '../Card/Card';
import './ProductContainer.css';
import axios from 'axios';
import { useProductListing } from '../../contexts/product-context';
import { actionTypes } from '../../reducers/actionTypes';
import { getProductListService } from '../../services/getProductListService';

export const ProductContainer = () => {
    const {productListingState, productListingDispatch} = useProductListing();

    useEffect(() => {
        (async () => {
                const products = await getProductListService();
                if(products) {
                    productListingDispatch({
                        type: actionTypes.LOAD_DATA,
                        payload: products
                    });
                }
            }
        )();
    }, []);

    return (
        <section className='products'>
            {
                productListingState.data.map(({id, title, price}) => {
                    return (
                        <ProductCard key={id} title={title} price={price} />
                    )
                })
            }
        </section>
    )
}