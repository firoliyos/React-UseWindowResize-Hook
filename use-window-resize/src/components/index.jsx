import { useLayoutEffect, useState } from "react";


export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })

    useLayoutEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    }, [])


    return windowSize
}