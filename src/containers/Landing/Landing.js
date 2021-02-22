import React, { useState, useEffect } from 'react';
import classes from './Landing.module.css';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
import LogoSVG from '../../media/logoSVG.svg';
import { Redirect, withRouter } from 'react-router';

import WINEPNG from '../../media/pixelate.gif';
import WINESTILL from '../../media/winebottle.jpg';


const imaVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        transition: {
            duration: 2,
            delay: 6,
        },
        opacity: 1
    },
    exit: {
        opacity: 0, transition: { delay: 0.5 }
    }
}
const wineVariant = {
    initial: {
        opacity: 0,

    },
    animate: {
        transition: {
            duration: 1,
            delay: 4,
        },
        opacity: 1,
        rotate: 0

    },
    exit: {
        opacity: 0,
        transition: { delay: 0.5 },
    }
}

const hiVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        transition: { duration: 1, delay: 2.7 },
        opacity: 1,
    },
    exit: {
        opacity: 0, transition: { delay: 0.5 }
    }
}

const containerVariant = {
    initial: {
        opacity: 1,
    },
    animate: {
        transition: { duration: 1 },
    },
    hide: {
        transition: { duration: 1 },
        opacity: 1,
    },
}

const logoVariant = {
    initial: {
        pathLength: 0,
        fill: 'none',
    },
    animate: {
        pathLength: 1,
        fill: '#333',
        transition: { duration: 2 }
    }
}


const Landing = ({ history }) => {


    const [startExit, setStartExit] = useState(false)
    const [currentPic, setCurrentPic] = useState(WINESTILL)

    useEffect(() => {
            setTimeout(() => {
                setStartExit(true)
                history.push({ pathname: '/projects' })
            }, 13000)
        setTimeout(() => {
            setCurrentPic(WINEPNG)
        }, 8500)
    }, [])

    return (
        <motion.div
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
            y={-20}
            className={classes.Landing}>
            <div className={classes.DescContainer}>
                <motion.svg
                    key="SVG"
                    x={-10}
                    scale={0.8}
                    style={startExit && { opacity: 0 }}
                    className={classes.SVG}
                    viewBox="0 0 100 100">
                    <g transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)" strokeWidth="3px">
                        <motion.path
                            className={classes.SVGPath}
                            variants={logoVariant}
                            initial="initial"
                            animate="animate"
                            d="M472 791 c-77 -29 -172 -108 -157 -131 5 -8 17 -2 39 18 78 73 149
                                102 251 103 64 1 83 -3 140 -32 111 -55 176 -151 183 -271 3 -52 8 -68 19 -68
                                25 0 13 123 -19 192 -33 70 -106 145 -173 178 -70 33 -208 39 -283 11z"/>
                        <motion.path
                            className={classes.SVGPath}
                            variants={logoVariant}
                            initial="initial"
                            animate="animate"
                            d="M140 461 c0 -164 4 -261 10 -261 6 0 11 90 12 235 l3 236 117 -96
                                118 -96 112 92 c62 51 115 94 117 96 3 2 0 8 -7 15 -8 8 -38 -11 -118 -76 -93
                                -76 -109 -85 -123 -73 -39 33 -217 174 -228 181 -10 6 -13 -48 -13 -253z"/>
                        <motion.path
                            className={classes.SVGPath}
                            variants={logoVariant}
                            initial="initial"
                            animate="animate"
                            d="M1038 465 l-3 -236 -117 96 -118 96 -112 -92 c-62 -51 -115 -94 -117
                                -96 -3 -2 0 -8 7 -15 8 -8 38 11 118 76 93 76 109 85 123 73 39 -33 217 -174
                                229 -181 9 -6 12 48 12 253 0 164 -4 261 -10 261 -6 0 -11 -90 -12 -235z"/>
                        <motion.path
                            className={classes.SVGPath}
                            variants={logoVariant}
                            initial="initial"
                            animate="animate"
                            d="M242 402 c6 -86 42 -156 113 -219 80 -73 122 -88 245 -88 95 0 110 3
                            160 28 66 34 124 87 111 100 -6 6 -22 -1 -44 -20 -86 -75 -227 -105 -334 -69
                            -119 40 -211 153 -221 271 -3 49 -8 65 -20 65 -12 0 -14 -12 -10 -68z"/>

                    </g>
                </motion.svg>
                <motion.div
                    variant={containerVariant}
                    style={startExit && { opacity: 0 }}
                >
                    <motion.h2
                        key="hi"
                        variants={hiVariant}
                        initial="initial"
                        animate="animate"
                        className={classes.Words}> Hi, my name is Ollie. I used to make wine. </motion.h2>
                    <motion.div
                        key="winepic"
                        variants={wineVariant}
                        initial="initial"
                        animate="animate"
                        x={-13}
                        className={classes.WineDropImage}>
                        <motion.img
                            style={{ cursor: 'pointer' }}
                            whileHover={{ scale: 1.12 }}
                            height="130px" src={currentPic} />
                    </motion.div>
                    <motion.h2
                        key="ima"
                        variants={imaVariant}
                        exit="initial"
                        initial="initial"
                        animate="animate"
                        className={classes.Words}> Now I'm an aspiring, self taught web developer </motion.h2>
                </motion.div>
            </div>
        </motion.div >
    )
}

export default withRouter(Landing);