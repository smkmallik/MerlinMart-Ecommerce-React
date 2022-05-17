import React from 'react';
import { ProductCard } from '../Card/Card';
import { products } from '../../../backend/db/products';
import './ProductContainer.css';


export const ProductContainer = () => {
    return (
        <section className='products'>
            {
                products.map(({id, title, price}) => {
                    return (
                        <ProductCard title={title} price={price} />
                    )
                })
            }
        </section>
    )
}