import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <p className='navbar__title'>
                <Link to='/'>
                    MerlinMart
                </Link>
            </p>

            <input className='navbar__search' type="search" name="search" placeholder='Search' />
            <ul className='navbar__navoptions'>
                <li className='navbar__navicons'>
                    <span>
                        <Link to='/cart'>
                            <ShoppingCartIcon />
                        </Link>
                    </span>
                    <span>0</span>
                </li>
                <li className='navbar__navicons'>
                    <Link className='navbar__icon' to='/wishlist'>
                        <span className='navbar__navicons'>
                            <FavoriteIcon />
                        </span>
                        <span>
                            0
                        </span>
                    </Link>
                </li>
                <li className='navbar__navicons'>
                    <Link className='navbar__icon' to='/signin'>
                        <span>
                            <PersonIcon />
                        </span>
                        <span>
                            Log In       
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;