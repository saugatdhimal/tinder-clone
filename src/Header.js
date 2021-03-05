import React from 'react';
import "./Header.css";
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header" >
            <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            <img 
            className="header__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uewT2rUMiOGn0uZuyd8TojRaKJe-cte3nA&usqp=CAU"
            alt=""
            />
            <IconButton>
            <ForumIcon className="header__icon" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Header
