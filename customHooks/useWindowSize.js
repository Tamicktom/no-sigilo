import { useState, useEffect } from 'react';

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    // window.addEventListener('resize', () => {
    //     setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     })
    // })
    // useEffect(() => {
    //     setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //     });
    // }, []);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        })
    }, [])

    return windowSize;
}