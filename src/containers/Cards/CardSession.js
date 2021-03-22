import React from 'react';
import classes from './cardSession.module.css';
import iconMessage from './../../assets/message.svg';
import Card from './../../components/Card/Card';

const CardSession = () => {
    return(
        <div className={classes.CardSession}>
            <div className={classes.cardHeading}>
                <span>Why we are best in our Towm</span>
                <p>We have 5000+ Reviews and our Customers on our food and Delivery service. You can read more about our company</p>
                <span className={classes.messageIcon}> </span>
                <img src={iconMessage} />
            </div>
            <div className={classes.cards}>
                <Card />
            </div>
        </div>
    )
};

export default CardSession;