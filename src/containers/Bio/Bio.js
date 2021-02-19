import React, { useState, useEffect } from 'react';
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion';
import { Scroll, Frame, Page } from 'framer';
import classes from './Bio.module.css';


const Bio = () => {

    const [selected, setSelected] = useState(0)
    const options = [
        { word: 'Qualifications / Courses', color: 'orangered' },
        { word: 'Past 5 Years', color: 'orangered' },
        { word: 'More', color: 'orangered' },
    ]

    const bioVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
    }

    return (
        <motion.div
            exit={{ opacity: 0 }}
            style={{ padding: '1rem 0rem' }}
            className={classes.Bio}>
            <AnimateSharedLayout>
                <motion.ol className={classes.TitleOL} >
                    {options.map(({ word, color }, index) => (
                        <motion.h2
                            key={index}
                            animate
                            className={classes.Center}
                            onClick={() => setSelected(index)}
                            style={selected === index ? { color } : { scale: .5 }}>
                            {word}
                            {index === selected && (
                                <motion.div
                                    className={classes.Underline}
                                    layoutId={classes.Underline}
                                    style={{ backgroundColor: color }}>
                                </motion.div>
                            )}
                        </motion.h2>
                    ))}
                </motion.ol>
            </AnimateSharedLayout>
            <AnimatePresence exitBeforeEnter>
                {selected === 0 ?
                    <motion.div
                        key="about"
                        variants={bioVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit">
                        <div className={classes.Info}>
                            <h3>Non WebDev Related</h3>
                            <div className={classes.InlineStudies}>
                                <h4>A-Levels</h4>
                                <h5>Maths: A</h5>
                                <h5>Chemistry: A</h5>
                                <h5>Biology: A</h5>
                            </div>
                            <div className={classes.InlineStudies}>
                                <h4>Undergrad:</h4>
                                <h5>Economics 2.1 from University of Leeds</h5>

                            </div>
                            <br />
                            <hr />
                            <br />
                            <h3>WebDev Related</h3>

                            <h6><i>While taking a year off work, everything has been funded from savings I earned in order to study. And all courses below have been completed with many, many, many hours of additional work!</i></h6>

                            <h4>Udemy</h4>
                            <table className={classes.ReducedMargin}>
                                <thead>
                                <tr>
                                    <th style={{ textAlign: 'left' }}><h5>Title</h5></th>
                                    <th><h5>Udemy Rating</h5></th>
                                    <th><h5>Students</h5></th>
                                    <th><h5>Duration (hrs)</h5></th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr>
                                    <td><h6>Modern HTML and CSS From The Beginning</h6></td>
                                    <td><h6>4.7</h6></td>
                                    <td><h6>16400</h6></td>
                                    <td><h6>21</h6></td>
                                </tr>
                                <tr>
                                    <td><h6>Bootstrap 4 From Scratch With 5 Projects</h6></td>
                                    <td><h6>4.6</h6></td>
                                    <td><h6>13800</h6></td>
                                    <td><h6>11.5</h6></td>
                                </tr>
                                <tr>
                                    <td><h6>Modern Javascript From The Beginning</h6></td>
                                    <td><h6>4.7</h6></td>
                                    <td><h6>23800</h6></td>
                                    <td><h6>21.5</h6></td>
                                </tr>
                                <tr>
                                    <td><h6>20 Web Projects With Vanilla Javascript</h6></td>
                                    <td><h6>4.8</h6></td>
                                    <td><h6>4200</h6></td>
                                    <td><h6>16</h6></td>
                                </tr>
                                <tr>
                                    <td><h6>React - The Complete Guide</h6></td>
                                    <td><h6>4.7</h6></td>
                                    <td><h6>103500</h6></td>
                                    <td><h6>40.5</h6></td>
                                </tr>
                                <tr>
                                    <td><h6>Creative Advanced CSS Animations and Transformations</h6></td>
                                    <td><h6>4.7</h6></td>
                                    <td><h6>900</h6></td>
                                    <td><h6>11</h6></td>
                                </tr>
                                </tbody>
                            </table>
                            <h4>Other</h4>
                            <div className={classes.ReducedMargin}>
                                <h5>Python</h5>
                                <h6>Telusko Media - Python Tutorials For Beginners</h6>
                                <h6>JustDjango - Django Beginner and Advanced Roadmaps</h6>
                                <h6>CodingForEntrepreneurs - eCommerce, DjangoRestFramework API Building, ReactifyDjango</h6>
                            </div>
                            <h4>Honorouble Mentions</h4>
                            <h5>Helping Maintain My Sanity While WebDeving</h5>
                            <div className={classes.ReducedMargin} style={{ marginBottom: '5rem' }}>
                                <h6>- The Django and DjangoRestFramework docs for encylopedic level detail</h6>
                                <h6>- CoreySchafer YouTube channel for quick python tips and insights</h6>
                                <h6>- NetNinja YouTube channel for everything Corey hasn't done</h6>
                                <h6>- The StackOverflow online community, and their answers to the questions I feel dumb asking</h6>
                                <h6>- Medium.com for playtime</h6>
                                <h6>- VSCode for just being great (I can't not mention the BracketPairColorizer extension!!)</h6>
                            </div>
                        </div>
                    </motion.div> :
                    selected === 1 ?
                        <motion.div
                            key="5"
                            variants={bioVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                            <div className={classes.ScrollFrame}>
                                <Scroll height={320} width={300} background="#FFF" color="#FFF" style={{ fontSize: '13px' }}>
                                    <Frame center="x" className={classes.Frame} size={300} height={90} radius={30} background="#333">
                                        2015 : Graduated from Uni, completely uninspired by my course, saved up some money and flew to NZ with a friend
                                    </Frame>
                                    <Frame center="x" className={classes.Frame} size={300} height={100} radius={30} background="#333">
                                        2017 : Moved to Tasmania to follow a lifelong ambition of making wine, while saving up money to study Viticulture
                                    </Frame>
                                    <Frame center="x" className={classes.Frame} size={300} height={70} radius={30} background="#333">
                                        2018 : 6 month, 7000km cycling tour, from the north to the south of Chile
                                    </Frame>
                                    <Frame center="x" className={classes.Frame} size={300} height={70} radius={30} background="#333">
                                        2019 : Moved back to Tasmania to continue work in the winery and vineyard
                                    </Frame>
                                    <Frame center="x" className={classes.Frame} size={300} height={90} radius={30} background="#333">
                                        Early 2020 : Came back to the UK to focus on Web Development and officially became a year-long hermit
                                    </Frame>
                                </Scroll>
                            </div>
                        </motion.div> :
                        <motion.div
                            key="Future"
                            variants={bioVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit">
                            <div className={classes.Info}>
                                <h4>Some technologies I'd love to become proficient in:</h4>
                                <div className={classes.InlineStudies}>
                                    <p>Docker</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>React Native</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>Various AWS Services</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>Material UI</p>
                                </div>
                                <p>I've come to understand that the craft of using different web-based technologies is an ongoing process of improvement, rather than something you simply know or don't. So while I strive to become familiar with more technologies, I also aim to update and refine my current knowledge</p>
                            </div>
                            <div className={classes.Info}>
                                <h4>When I'm not playing around with my computer here are some of the things I get up to in my spare time...</h4>
                                <div className={classes.InlineStudies}>
                                    <p>Climbing/ Camping + Hiking</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>Guitar</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>Reading</p>
                                    <p>&emsp;|&emsp;</p>
                                    <p>Pub with mates (remember that?!)</p>
                                </div>
                            </div>
                        </motion.div>}
            </AnimatePresence>
        </motion.div >

    );
}

export default Bio;