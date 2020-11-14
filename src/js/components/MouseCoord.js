import React from "react"

const TrackMouseCoord = () => {
  const [x, setX] = React.useState(0)
  const [y, setY] = React.useState(0)

  const trackMouse = e => {
    setX(e.clientX)
    setY(e.clientY)

    console.log("mouse coordinate event handler")
  }

  React.useEffect(() => {
    // console.log to check if the effects is run
    // on every re-render of the component
    console.log("mouse coordinates event listener")
    window.addEventListener("mousemove", trackMouse)

    // to make the effect runonly once,
    // add an empty array as a second parameter to the useEffect

    return () => {
      //  useEffect with cleanup
      console.log("component unmounted")
      window.removeEventListener("mousemove", trackMouse)
    }
  }, [])

  return (
    <div style={{ marginTop: "5%" }}>
      <h3>
        Mouse's cordinates are: x-axis: {x}, y-axis: {y}
      </h3>
    </div>
  )
}

export default TrackMouseCoord
