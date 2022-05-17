import React from 'react';
import './Card.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ProductCard = (props) => {
    const {title, price} = props;
    return (
        <div className='card__product'>
            <div className='card__productInfoImage'>
                <div className='card__productImg'>
                    Image Incoming
                </div>
                <div className='card__productIcons'>
                    <FavoriteBorderIcon className='card__productIconItem' />
                </div>
            </div>
            <hr className='card__divider' />
            <div className='card__productDetails'>
                <div className='card__productDetailContent'>
                    <span>{title}</span>
                    <span>₹ {price}</span>
                </div>
                <div>
                    <AddShoppingCartIcon
                    className='card__productIconItem' />
                </div>
            </div>
        </div>
    )
}

export const CategoryCard = (props) => {
    const {title} = props;
    return (
        <div className='card__category'>
            <div className='card__productImg'>
                Image Incoming
            </div>
            <span className='card__categoryTitle'>{title}</span>
        </div>
    )
}

export const DiscountCard = (props) =>
{
    const {offer, item} = props;
    return (
        <div className="card__discount">
            <div className='card__productImg'>
                Image Incoming
            </div>
            <div className='card__discountContent'>
                <div className='card__discountHeading'>
                    <h3>{offer}</h3>
                    <h5>{item}</h5>
                </div>
                <button>
                    Shop Now
                </button>
            </div>
        </div>
    )
}