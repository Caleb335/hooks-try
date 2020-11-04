import React from "react"

const Count = () => {
  const [count, setCount] = React.useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }
  return <button onClick={increaseCount}>count {count}</button>
}

export default Count
