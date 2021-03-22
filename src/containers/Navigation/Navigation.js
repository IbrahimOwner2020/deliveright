import React from 'react';
import classes from './Navigation.module.css';

const Navigation = () => (
    <navigation className={classes.Navigation}>
        <span className={classes.Logo}>Deliveright</span>
        <div>
            <ul className={classes.NavList}>
                <li className={classes.NavItem1}><a href="#">Home</a></li>
                <li className={classes.NavItem2}><a href="#">About Us</a></li>
                <li className={classes.NavItem3}><a href="#">Services</a></li>
                <li className={classes.NavItem4}><a href="#">Blog</a></li>
                <li className={classes.NavItem5}><a href="#">Contact Us</a></li>
                <li className={classes.NavItem6}><a href="#">Log In</a></li>
            </ul>
            <div className={classes.NavMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </navigation>
);

export default Navigation;