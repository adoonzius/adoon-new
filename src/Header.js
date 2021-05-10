import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom";
function Header() {
    return (
        <div className='header'>
           
            <Link to='/'>
            <img
            className="header__icon"
            src="https://cdn.dribbble.com/users/482854/screenshots/14446739/media/3b906aa00e1072a156fac5b62d273252.png?compress=1&resize=400x300"
            alt=""
            
            />
           
            </Link>
            <div className='header__center'>
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p>this is a test website</p>
                <LanguageIcon />
                 <ExpandMoreIcon />
                 <Avatar />

            </div>
        </div>
    )
}

export default Header
