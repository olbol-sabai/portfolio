import React, { useRef, useEffect } from 'react';
import logo from '../../media/OMWDEVSLOGO.png';
import { motion } from 'framer-motion';


const Logo = React.memo(({ height }) => {

    return (
        <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .7 }}
            src={logo} />
    );
})

export default Logo;