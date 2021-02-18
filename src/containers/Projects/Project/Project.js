import React, { useState, useEffect, useRef } from 'react';
import { useTransform, useViewportScroll, motion, useMotionValue, useElementScroll } from 'framer-motion';
import classes from './Project.module.css';
import useWindowWidth from '../../../useWindowWidth';

const Project = ({ workoutTitle, dragDimensions, image, details, link }) => {

    const { scrollY } = useViewportScroll()

    // const titleFind = useTransform(
    //     scrollY,
    //     [0, 500, 600],
    //     ['0', '0', '1'],
    //     'ease'
    // );

    const viewportWidth = useWindowWidth()


    const x = useMotionValue(0)
    const titleRise = useTransform(x, [0, -100], ['0px', '-35px'], 'ease');
    const detailsFall = useTransform(x, [0, -100], ['0px', '35px'], 'ease');
    const imageWidth = useTransform(x, [0, dragDimensions + viewportWidth - 360], [0, 300])
    const imageColor = useTransform(x, [0, -200], ['#FFF', '#333'])
    const imageSize = useTransform(x, [0, -100], [1, 1.12])
    const moreInfoOpacity = useTransform(x, [0, -60], [1, 0])
    const moreInfoPosition = useTransform(x, [0, -60], [290, 250])
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
        }
    }, [])
    useEffect(() => {
        let thisPage = document.querySelector("html")
        if (hideBG) {
            thisPage.classList.remove(classes.NoScroll)
        } else {
            thisPage.classList.add(classes.NoScroll)
        }
    }, [hideBG])


    return (
        <div
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
                style={{ opacity: moreInfoOpacity, x: moreInfoPosition, zIndex: -1 }}
            >Drag For More Info</motion.h5>
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
                    {details.map(det => (
                        <li>{det}</li>
                    ))}
                    <li>Visit <a href={link.link} target="_blank">Demo</a> {link.message}</li>
                </ul>
            </motion.div>
        </div >
    );
}

export default Project;