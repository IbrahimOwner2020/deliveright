import React from 'react';
import Illustrator from '../Illustrators/Illustrators';
import classes from './Heading.module.css';

const Heading = () => (
    <div className={classes.Heading}> 
        <div className={classes.Typograph}>
            <h1>Get your food Delivery at your Door step</h1>
            <p>You can get scooter hourly and monthly plus yearly basis We have many scooters nearby your place</p>
            <div className={classes.Btns}>
                <a className={classes.Btn1} href="#">Order now</a>
                <a className={classes.Btn2} href="#">Track your order</a>
            </div>
        </div>
        <div>
            <Illustrator />
        </div>
    </div>
);

export default Heading;
