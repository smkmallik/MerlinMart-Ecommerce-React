import React, {useReducer, useEffect} from 'react';
import './Home.css';
import { Banner } from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import { ProductCard, CategoryCard, DiscountCard } from '../../components/Card/Card';
import { products, categories, discounts } from '../../components/Card/CardData';

export const Home = () => {

    return (
        <div className='home'>
            <Banner />
            <Title title='Trending Products' />
            
            <div className='home__productCards'>
            {
                products.map(({id, title, price}) => {
                    return (
                        <ProductCard key={id} title={title} price={price} />
                    )
                })
            }
            </div>

            <Title title='Shop by Category' />

            <div className='home__categoryCards'>
                {
                    categories.map(category=> {
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