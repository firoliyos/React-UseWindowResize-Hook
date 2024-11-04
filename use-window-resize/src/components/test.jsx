import useWindowResize from ".";

export default function UseWindowResizeTest() {
  const windowSize = useWindowResize();
  const {width, height} = windowSize;
  return (
    <div>
      <h1>USE WINDOW RESIZE HOOK</h1>
      <p>width {width}</p>
      <p>height {height}</p>
    </div>
  );
}

