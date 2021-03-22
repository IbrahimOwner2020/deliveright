import React from 'react';
import Heading from '../../components/Heading/Heading';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

const Header = () => (
    <div className={classes.Header}>
        <div className={classes.HeaderRow}>
            <Navigation />
            <Heading />
        </div>
    </div>
)

export default Header;