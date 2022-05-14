import React from 'react';
import './Home.css';
import { Banner } from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Title from '../../components/Title/Title';
import { ProductCard, CategoryCard, DiscountCard } from '../../components/Card/Card';
import { products, categories, discounts } from '../../components/Card/CardData';

export const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <Title title='Trending Products' />
            
            <div className='home__productCards'>
                {
                    products.map(product => {
                        return (
                            <ProductCard
                                name={product.name}
                                price={product.price}
                            />
                        )
                    })
                }
            </div>

            <Title title='Shop by Category' />

            <div className='home__categoryCards'>
                {
                    categories.map(category => {
                        return <CategoryCard
                                    title={category.title}
                                />
                    })
                }
            </div>

            <Title title='Huge Discounts on Products' />
            <div className='home__discountCards'>
                {
                    discounts.map(discount => {
                        return (
                            <DiscountCard
                                offer={discount.offer}
                                item={discount.item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}