import useWindowResize from "."

export default function UseWindowResizeTest() {
    const windowSize = useWindowResize()
    const {width, height} = windowSize
    return(
        <div>
            <h1>USE WINDOW RESIZE HOOK</h1>
            <p>WIDTH: {width}</p>
            <p>HEIGHT: {height}</p>
        </div>
    )
}