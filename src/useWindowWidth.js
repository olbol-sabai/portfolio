import { useState, useEffect } from 'react';


const useWindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const resize = e => setWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, []);


    return width
}

export default useWindowWidth;