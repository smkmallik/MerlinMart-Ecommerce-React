import React from 'react';
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <p className='navbar__title'>
                <a className='navbar__navLink' href="./index.html">
                    MerlinMart
                </a>
            </p>

            <input className='navbar__search' type="search" name="search" placeholder='Search' />
            <ul className='navbar__navoptions'>
                <li className='navbar__navicons'>
                    <span>
                        <ShoppingCartIcon />
                    </span>
                    <span>0</span>
                </li>
                <li className='navbar__navicons'>
                    <span className='navbar__navicons'>
                        <FavoriteIcon />
                    </span>
                    <span>
                        0
                    </span>
                </li>
                <li className='navbar__navicons'>
                    <span>
                        <PersonIcon />
                    </span>
                    <span>
                        <a className='navbar__navLink' href=''>
                            Log In
                        </a>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;