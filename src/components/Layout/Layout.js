import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css';
import Sidebar from '../../containers/Sidebar/Sidebar';
import { useLocation } from 'react-router'


const Layout = props => {

    const [disappearLogo, setDisappearLogo] = useState(false)
    const [sidebarShowing, setSidebarShowing] = useState(false)
    const disapperingRef = useRef(null)

    const location = useLocation()
    return (
        <div className={classes.LayoutContainer} ref={disapperingRef}>
            <Sidebar
                showing={sidebarShowing}
                setSidebarShowing={setSidebarShowing} />
            {location.pathname !== '/' && (<Navbar
                disappear={disappearLogo}
                setSidebarShowing={setSidebarShowing} />)}
            <div className={location.pathname !== '/' ? classes.InnerContent : null}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;
