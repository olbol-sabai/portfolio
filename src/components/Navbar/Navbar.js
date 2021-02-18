import React, { useState } from 'react';
import classes from './Navbar.module.css';
import DisappearingContent from '../DisappearingContent/DisappearingContent';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development';


const Navbar = ({ disappear, history }) => {

    const [clicked, setClicked] = useState(0)
    const links = [
        { to: '/projects', title: 'Projects' },
        { to: '/bio', title: 'Bio' },
    ]

    const pageHandler = (index, page) => {
        history.push({ pathname: page })
        setClicked(index)
    }

    useEffect(() => {
        console.log(history)
        if (history.location.pathname === '/bio') {
            setClicked(1)
        } else setClicked(0)
    }, [history])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={classes.MainNavContainer}>
            <nav style={{ height: '100px' }} className={classes.Links} >
                <AnimateSharedLayout transition={{ duration: 2 }}>
                    {links.map(({ to, title }, i) => (
                        <>
                            <motion.a
                                onClick={() => pageHandler(i, to)}
                                key={i}
                                className={classes.ATag}
                                to={to}>
                                <div style={clicked === i ? { fontWeight: 600 } : null}>
                                    {title}
                                </div>
                                {clicked === i ?
                                    <motion.div
                                        layoutId="yo"
                                        y={-23}
                                        className={classes.BorderBox}>
                                    </motion.div> : null
                                }
                            </motion.a>
                        </>
                    ))}
                </AnimateSharedLayout>
            </nav>
            <DisappearingContent disappear={disappear} />
        </motion.div >
    );
}

export default withRouter(Navbar);