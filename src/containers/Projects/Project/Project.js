import React, { useState, useEffect, useRef } from 'react';
import { useTransform, useViewportScroll, motion, useMotionValue, useSpring } from 'framer-motion';
import classes from './Project.module.css';
import useWindowWidth from '../../../useWindowWidth';
import Icon from '../../../components/FontAwesome/FontAwesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Project = ({ workoutTitle, dragDimensions, image, details, link, githubRepoLink }) => {

    const [imageHovering, setImageHovering] = useState(false)
    const { scrollY } = useViewportScroll()
    const viewportWidth = useWindowWidth()


    const x = useMotionValue(0)
    const titleRise = useTransform(x, [0, -100], ['0px', '-35px'], 'ease');
    const detailsFall = useTransform(x, [0, -100], ['0px', '35px'], 'ease');
    const imageWidth = useTransform(x, [0, dragDimensions + viewportWidth - 360], [20, 293])
    const imageColor = useTransform(x, [0, -200], ['#FFF', '#333'])
    const imageSize = useTransform(x, [0, -100], [1, 1.12])
    const titleColor = useTransform(x, [0, -100], ['#333', '#FFF'])
    const closeOpacity = useTransform(x, [0, -100], [0, 1])
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
            document.ontouchmove = () => { return true; }            
        }
    }, [])

    useEffect(() => {
        if (hideBG) {
            document.ontouchmove = () => { return true; }            
            document.querySelector("html").classList.remove(classes.NoScroll)
        } else {
            document.ontouchmove = e => e.preventDefault();
            document.querySelector("html").classList.add(classes.NoScroll)
        }
    }, [hideBG])

    const close = () => {
        x.stop()
        console.log('tapping')
        x.set(0)
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ width: '100vw', paddingBottom: '3rem', paddingTop: '2rem', position: 'relative' }}>
            {!hideBG && (<motion.div
                className={classes.Background}
                style={{ backgroundColor: imageColor }}>

            </motion.div>)}
            <motion.h2
                className={classes.Title}
                y={titleRise}
                x={40}
                style={{ color: titleColor }}
            >{workoutTitle}</motion.h2>

            <motion.div
                y={15}
                opacity={closeOpacity}
                onClick={close}
                className={classes.CloseIcon}>X</motion.div>
            <motion.img
                x={x}
                drag={"x"}
                dragElastic={0.3}
                    onHoverStart={() => setImageHovering(true)}
                    onHoverEnd={() => setImageHovering(false)}
                dragMomentum={0.2}
                dragTransition={{
                    bounceStiffness: 200, bounceDamping: 20, power: 0.45, timeConstant: 500
                }}
                dragConstraints={{ left: dragDimensions + -360 + viewportWidth, right: 0 }}
                    className={[classes.DraggableImage, (imageHovering && classes.DraggableImageHover)].join(" ")}
                transition={{ ease: 'ease' }}
                style={{ scale: imageSize }}
                src={image}
                alt="planner" />

            {hideBG && (<motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse", }}
                y={-180}
                opacity={imageHovering ? "0" : "1"}
                    className={classes.ImageDivRight}>
                    <Icon icon={faChevronRight} />
                    <Icon icon={faChevronRight} />
            </motion.div>)}
            <div ref={progressBarRef} className={classes.DragProgressBarOuter}>
                <motion.div
                    y={-1}
                    className={classes.DragProgressBar}
                    style={{ width: imageWidth }}>
                </motion.div>
            </div>
            <motion.div
                y={detailsFall}
                style={{ display: 'flex', width: '95%' }}>
                <ul style={{ margin: 'auto' }}>
                    <li>Visit the <a style={{ color: 'var(--wine)' }}
                        href={link.link} target="_blank">DEMO</a>
                        {link.message}
                    </li>
                    {details.map((det, i) => (
                        <li key={i}>{det}</li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}

export default Project;