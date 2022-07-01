import React from 'react';
import { useProductListing } from '../../contexts/product-context';
import { actionTypes } from '../../reducers/actionTypes';
import './Filter.css';


const Filter = () => {

    const {
        CLEAR,
        LOW_TO_HIGH,
        HIGH_TO_LOW,
        RATING,
        MOBILE,
        LAPTOP,
        WATCH,
        DESKTOP,
        TABLET,
        PRICE
    } = actionTypes;

    const {productListingState, productListingDispatch} = useProductListing();

    const { sortBy, categories, price, rating} = productListingState;
    
    const {mobiles, laptops, watches, desktops, tablets} = categories;

    // const inputClickHandler = e => {
    //     productListingDispatch({
    //         type: RATING, value: e.target.value
    //     })
    //     console.log(e.target.value);
    // }

    return (
        <aside className='filter__container'>
            <div className='filter__titleContainer'>
                <h3>Filter</h3>
                <button onClick={() => productListingDispatch({type: CLEAR})}>Clear</button>
            </div>

            <div>
                <h3>Price</h3>
                <div className='filter__rangeSlider'>
                    <datalist>
                        <option value="1000" label='₹1000'></option>
                        <option value="2000" label='₹2000'></option>
                        <option value="3000" label='₹3000'></option>
                        <option value="4000" label='₹4000'></option>
                        <option value="5000" label='₹5000'></option>
                    </datalist>
                    <input 
                        type="range" 
                        min="1000" 
                        step='1000' 
                        max="5000"
                        value={price}
                        onChange={e => productListingDispatch({
                            type: PRICE,
                            value: e.target.value
                        }) }
                    />
                    
                </div>
                <div>
                    <h3>Category</h3>
                    <ul className='filter__categories'>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox"
                                checked={mobiles}
                                onChange={() => productListingDispatch({
                                    type: MOBILE
                                })}
                            />
                            <span>Mobile</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox"
                                checked={laptops}
                                onChange={() => productListingDispatch({
                                    type: LAPTOP
                                })}
                            />
                            <span>Laptop</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" 
                                checked={tablets}
                                onChange={() => productListingDispatch({
                                    type: TABLET
                                })}
                            />
                            <span>Tablet</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox"
                                checked={watches}
                                onChange={() => productListingDispatch({
                                    type: WATCH
                                })} 
                            />
                            <span>Watches</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox"
                                checked={desktops}
                                onChange={() => productListingDispatch({
                                    type: DESKTOP
                                })}
                            />
                            <span>Desktop</span>
                        </li>
                    </ul>
                </div>
                <div className='filter__ratingContainer'>
                    <h3>Ratings</h3>
                    <ul className='filter__ratings'>
                        <li>
                            <input 
                                className='filter__ratingOptions' 
                                type="radio" 
                                name='rating'
                                value="4"
                                onChange={
                                    e => productListingDispatch({
                                        type: RATING,
                                        value: e.target.value
                                    })
                                }
                            />
                            <span>4 stars & above</span>
                        </li>
                        <li>
                            <input 
                                className='filter__ratingOptions' 
                                type="radio" 
                                name='rating'
                                value="3"
                                onChange={
                                    e => productListingDispatch({
                                        type: RATING,
                                        value: e.target.value
                                    })
                                    
                                }
                             />
                            <span>3 stars & above</span>
                        </li>
                        <li>    
                            <input 
                                className='filter__ratingOptions' 
                                type="radio" 
                                name='rating'
                                value="2"
                                onChange={
                                    e => productListingDispatch({
                                        type: RATING,
                                        value: e.target.value
                                })}
                            />
                            <span>2 stars & above</span>
                        </li> 
                        <li>
                            <input 
                                className='filter__ratingOptions' 
                                type="radio" 
                                name='rating'
                                value="1"
                                onChange={
                                    e => productListingDispatch({
                                        type: RATING,
                                        value: e.target.value
                                })}
                            />
                            <span>1 stars & above</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Sort By</h3>
                    <ul className='filter__sortby'>
                        <li>
                            <input 
                                className='filter__sortbyOptions' 
                                type="radio" 
                                name="sort"
                                checked={sortBy===LOW_TO_HIGH}
                                onChange={() => productListingDispatch({type: LOW_TO_HIGH})} 
                            />
                            <span>Price - Low to High</span>
                        </li>
                        <li>   
                            <input 
                                className='filter__sortbyOptions' 
                                type="radio" 
                                name="sort" 
                                checked={sortBy===HIGH_TO_LOW}
                                onChange={() => productListingDispatch({type: HIGH_TO_LOW})}
                            />
                            <span>Price - High to Low</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Filter;