import { v4 as uuid } from 'uuid';

export const products = [
    {
        id: uuid(),
        title: 'Apple iPhone 13',
        price: 40,
        rating: 3
    },
    {
        id: uuid(),
        title: 'Apple Macbook Pro',
        price: 80,
        rating: 4
    },
    {
        id: uuid(),
        title: 'Apple iPad',
        price: 100,
        rating: 5
    }
]

export const categories = [
    {
        title: 'Mobile'
    },
    {
        title: 'Laptops'
    },
    {
        title: 'Desktops'
    },
    {
        title: 'Tablets'
    }
]

export const discounts = [
    {
        offer: 'upto 30% discount',
        item: 'on laptop'
    },
    {
        offer: 'upto 40% discount',
        item: 'on mobile'
    }
] 