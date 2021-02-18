import React, { useState, useEffect } from 'react';
import { useTransform, useViewportScroll, motion, useSpring, useCycle, useMotionValue } from 'framer-motion';
import classes from './Test.module.css';

const Test = () => {

    const boxMotion = useMotionValue(0)
    const boxSpring = useSpring(boxMotion)
    const textOpacity = useTransform(
        boxMotion, [0, 500], [1, 0]
    )

    return (
        <motion.div className={classes.Container}>
            <motion.h1 style={{ opacity: textOpacity }}>Testing</motion.h1>
            <motion.div
                dragPropagation
                crossover="fade"
                style={{ x: boxMotion }}
                drag={"x"}
                dragConstraints={{ left: 0, right: 300 }}
                className={classes.Box}>
                <div
                    className="inner"
                    style={{ height: '300px', width: '300px' }}>
                    yo
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Test;