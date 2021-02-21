import React, { useState, useEffect, useRef } from 'react';
import { useTransform, useViewportScroll, motion, useMotionValue } from 'framer-motion';
import classes from './Project.module.css';
import useWindowWidth from '../../../useWindowWidth';


const Project = ({ workoutTitle, dragDimensions, image, details, link, githubRepoLink }) => {

    const { scrollY } = useViewportScroll()
    const viewportWidth = useWindowWidth()


    const x = useMotionValue(0)
    const titleRise = useTransform(x, [0, -100], ['0px', '-35px'], 'ease');
    const detailsFall = useTransform(x, [0, -100], ['0px', '35px'], 'ease');
    const imageWidth = useTransform(x, [0, dragDimensions + viewportWidth - 360], [0, 300])
    const imageColor = useTransform(x, [0, -200], ['#FFF', '#333'])
    const imageSize = useTransform(x, [0, -100], [1, 1.12])
    const moreInfoOpacity = useTransform(x, [0, -60], [1, 0])
    const moreInfoPosition = useTransform(x, [0, -60], [200, 190])
    const titleColor = useTransform(x, [0, -100], ['#333', '#FFF'])

    const [gifDragged, setGifDragged] = useState(false)
    const [hideBG, setHideBG] = useState(true)
    const progressBarRef = useRef()

    useEffect(() => {
        x.onChange(() => {
            let current = x.get()
            current < -100 ? setGifDragged(true) : setGifDragged(false)
            current < -10 ? setHideBG(false) : setHideBG(true)
        })
    }, [x]);

    useEffect(() => {
        return () => {
            document.querySelector("html").classList.remove(classes.NoScroll)
            document.querySelector("body").classList.remove(classes.NoScroll)
        }
    }, [])
    useEffect(() => {
        if (hideBG) {
            document.querySelector("body").classList.remove(classes.NoScroll)
            document.querySelector("html").classList.remove(classes.NoScroll)
        } else {
            document.querySelector("body").classList.add(classes.NoScroll)
            document.querySelector("html").classList.add(classes.NoScroll)
        }
    }, [hideBG])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ width: '100vw', position: 'relative' }}>
            <motion.h1
                initial={{ x: 0, y: 5 }}
                x={titleRise}
            >. . . . . . . . . . . . . . . . . . . .</motion.h1>
            {!hideBG && (<motion.div
                className={classes.Background}
                style={{ backgroundColor: imageColor }}>

            </motion.div>)}
            <motion.h5
                style={{ opacity: moreInfoOpacity, x: moreInfoPosition, zIndex: -1, y: 20 }}
                >{"<<"} Drag Below {"<<"}</motion.h5>
            <motion.h2
                className={classes.Title}
                y={titleRise}
                style={{ color: titleColor }}
            >{workoutTitle}</motion.h2>
            <motion.img
                x={x}
                drag={"x"}
                dragElastic={0.3}
                dragTransition={{
                    bounceStiffness: 100, bounceDamping: 25, power: 0.45, timeConstant: 500
                }}
                dragConstraints={{ left: dragDimensions + -360 + viewportWidth, right: 0 }}
                className={classes.DraggableImage}
                transition={{ ease: 'ease' }}
                style={{ scale: imageSize }}
                src={image}
                alt="planner" />
            <div ref={progressBarRef} className={classes.DragProgressBarOuter}>
                <motion.div
                    className={classes.DragProgressBar}
                    style={{ width: imageWidth }}>
                </motion.div>
            </div>
            <motion.div
                y={detailsFall}
                style={{ display: 'flex', width: '95%' }}>
                <ul style={{ margin: 'auto' }}>
                    {details.map((det, i) => (
                        <li key={i}>{det}</li>
                    ))}
                    <li>Visit the <a style={{ color: 'var(--wine)' }}
                        href={link.link} target="_blank">DEMO</a>
                        {link.message}
                    </li>
                </ul>
            </motion.div>
        </motion.div>
    );
}

export default Project;