import React from "react"
import TrackMouseCoord from "./MouseCoord"

const ToggleComponent = ({ top }) => {
  const [toggle, setToggler] = React.useState(true)

  return (
    <div style={{ marginTop: top }}>
      <button
        onClick={() => {
          setToggler(!toggle)
        }}
      >
        Toggle component
      </button>
      {/* if true display the component */}
      {toggle && <TrackMouseCoord />}
    </div>
  )
}

export default ToggleComponent
