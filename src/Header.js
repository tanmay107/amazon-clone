import React, { useLayoutEffect, useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import DehazeIcon from '@material-ui/icons/Dehaze';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
 }



function ShowWindowDimensions() {
    let icon_visible = 'none';
    const [width, height] = useWindowSize();
    if (width <= 768) {
        icon_visible = 'block';
    }
    return icon_visible;
}

let navs = 'flex';

// function ShowNav() {
//     const [NavDis, setNavDis] = useState('none');
//     setNavDis('flex');
// }

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    

    return (
        <div className='header'>
            <Link to = '/'>
                <img className='header__logo' src= 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt = 'logo' />
            </Link>
            <div className = 'header__search'>
                <input className = 'header__searchInput' type = 'text' />
                <SearchIcon className = 'header__searchIcon' />
            </div>

            <div className = 'header__nav' style={{display: {navs}}} >
                <Link to = {!user && '/login'}>
                    <div onClick={handleAuthentication} className= 'header__option'>
                        <span className='header__optionLineOne'>Hello, {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to = '/orders'>
                    <div className= 'header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                <div className= 'header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <Link to = '/checkout'>
                    <div className = 'header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className= 'header__optionLineTwo header__basketCount'>{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <a href= "#" className="icon">
                <DehazeIcon style={{color:'white', display: `${ShowWindowDimensions()}`}} />
            </a>
            
        </div>
    );
}

export default Header;
