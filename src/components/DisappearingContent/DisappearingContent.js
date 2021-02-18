import React, { useEffect, useRef } from 'react';
import Logo from '../Logo/Logo';
import classes from './DisappearingContent.module.css'

const DisappearingContent = ({ disappear }) => {

    return (
        <div
            className={classes.DisappearingContainer}>
            <Logo height="80" />
        </div>
    );
}

export default DisappearingContent;