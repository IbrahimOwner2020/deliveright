import React from 'react';
import classes from './card.module.css';
import sprite from './../../assets/symbol-defs.svg';

const Card = () => {
    return (
        <div className={classes.cards}>
            <div className={classes.Card}>
                <svg>
                    <use xlinkHref={`${sprite}#icon-heart`}></use>
                </svg>
                <span>Choose your Favorate Food</span>
            </div>
            <div className={classes.Card}>
                <svg>
                    <use xlinkHref={`${sprite}#icon-copy`}></use>
                </svg>
                <span>Get delivery At your dood step</span>
            </div>
            <div className={classes.Card}>
                <svg>
                    <use xlinkHref={`${sprite}#icon-file-text2`}></use>
                </svg>
                <span>We have 5000+ Review On our App</span>
            </div>
        </div>
    )
};

export default Card;