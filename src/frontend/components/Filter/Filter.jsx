import React from 'react';
import './Filter.css';

const Filter = () => {
    return (
        <aside className='filter__container'>
            <div className='filter__titleContainer'>
                <h3>Filter</h3>
                <button>Clear</button>
            </div>

            <div>
                <h3>Price</h3>
                <div className='filter__rangeSlider'>
                    <span>₹1</span>
                    <input type="range" min="1" max="1000" />
                    <span>₹1000</span>
                </div>
                <div>
                    <h3>Category</h3>
                    <ul className='filter__categories'>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" />
                            <span>Mobile</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" />
                            <span>Laptop</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" />
                            <span>Tablet</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" />
                            <span>Watches</span>
                        </li>
                        <li className='filter__categoryOptions'>
                            <input type="checkbox" />
                            <span>Desktop</span>
                        </li>
                    </ul>
                </div>
                <div className='filter__ratingContainer'>
                    <h3>Ratings</h3>
                    <ul className='filter__ratings'>
                        <li>
                            <input className='filter__ratingOptions' type="radio" name='rating' />
                            <span>4 stars & above</span>
                        </li>
                        <li>
                            <input className='filter__ratingOptions' type="radio" name='rating' />
                            <span>3 stars & above</span>
                        </li>
                        <li>    
                            <input className='filter__ratingOptions' type="radio" name='rating' />
                            <span>2 stars & above</span>
                        </li> 
                        <li>
                            <input className='filter__ratingOptions' type="radio" name='rating' />
                            <span>1 stars & above</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Sort By</h3>
                    <ul className='filter__sortby'>
                        <li>
                            <input className='filter__sortbyOptions' type="radio" name="sort" />
                            <span>Price - Low to High</span>
                        </li>
                        <li>   
                            <input className='filter__sortbyOptions' type="radio" name="sort" />
                            <span>Price - High to Low</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Filter;