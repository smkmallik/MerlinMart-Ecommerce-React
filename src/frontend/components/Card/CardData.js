import { v4 as uuid } from 'uuid';

export const products = [
    {
        id: uuid(),
        title: 'Apple iPhone 13',
        price: 40
    },
    {
        id: uuid(),
        title: 'Apple Macbook Pro',
        price: 80
    },
    {
        id: uuid(),
        title: 'Apple iPad',
        price: 100
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