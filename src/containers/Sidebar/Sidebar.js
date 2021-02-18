import React, { useState } from 'react';
import classes from './Sidebar.module.css';


const Sidebar = ({ showing, setSidebarShowing }) => {

    let styles = showing ? classes.ShowSideBar : classes.HideSideBar

    return (
        <div
            className={[styles, classes.SideBar].join(" ")}
            style={{ width: '100vw', height: '100vh' }} >
            <div className={classes.MenuChoices}>
                <ul>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ul>
            </div>
            <div
                className={classes.Background}
                onClick={() => setSidebarShowing(s => !s)}>
                Background
            </div>

        </div>
    );
}

export default Sidebar;