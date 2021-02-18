import React from 'react';
import classes from './SlidingDiv.module.css';


const SlidingDiv = ({ delay, hovering }) => {

    return (
        <div className={classes.MainDivContainer}>
            <div className={classes.InitialDiv}>

            </div>
            <div
                style={{
                    transform: hovering ? 'translateX(0%)' : 'translateX(100%)',
                    transitionDelay: `${delay}s`,
                }}
                className={classes.SecondaryDiv}>

            </div>
        </div>
    );
}

export default SlidingDiv;