import React, { useState } from 'react';
import classes from './Button.module.css';
import SlidingDiv from '../SlidingDiv/SlidingDiv';


const Button = props => {

    const [hovering, setHovering] = useState(false);

    return (
        <button
            className={classes.Button}
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            type={props.type}
            onClick={props.clicked}>
            <SlidingDiv delay="0" hovering={hovering} />
            <SlidingDiv delay="0.1" hovering={hovering} />

        </button>
    );
}

export default Button;