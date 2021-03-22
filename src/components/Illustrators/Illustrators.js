import React from 'react';
import classes from './illustrastor.module.css';
import illu1 from './../../assets/illustrator1.svg';
import illu2 from './../../assets/illustrator2.svg';

const Illustrator = () => (
    <div className={classes.Illustrator}>
        <img className={classes.img1} src={illu1} />
        <img className={classes.img2} src={illu2} />

        <div className={classes.cicRed}></div>

        <div className={classes.cic1}></div>
        <div className={classes.cic2}></div>
        <div className={classes.cic3}></div>
        <div className={classes.cic4}></div>
        <div className={classes.cic5}></div>
        <div className={classes.cic6}></div>

        <div className={classes.cicL7}></div>
        <div className={classes.cicL8}></div>

        <div className={classes.cicM9}></div>
        <div className={classes.cicM10}></div>
        <div className={classes.cicM11}></div>

        <div className={classes.cicF12}></div>
        <div className={classes.cicF13}></div>
        <div className={classes.cicF14}></div>
    </div>
)

export default Illustrator;