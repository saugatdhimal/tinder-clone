import React from 'react';
import './SwipeButton.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';


function SwipeButton() {
    return (
        <div className="swipeButton">
            <IconButton >
            <ReplayIcon  className="swipeButton__repeat" fontSize="large"/>
            </IconButton>
            <IconButton >
            <CloseIcon  className="swipeButton__left" fontSize="large"/>
            </IconButton>
            <IconButton >
            <StarRateIcon className="swipeButton__star" fontSize="large"/>
            </IconButton>
            <IconButton >
            <FavoriteIcon  className="swipeButton__right" fontSize="large"/>
            </IconButton>
            <IconButton >
            <FlashOnIcon  className="swipeButton__lightning" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default SwipeButton;
