import React from "react"

const DocumentTitle = () => {
  const [count, setCount] = React.useState(0)

  const updateCount = () => {
    setCount(count + 1)
  }

  React.useEffect(() => {
    // sets the document title according to the amount
    // of time the button has been clicked
    document.title = `clicked ${count} ${count > 0 ? "times" : "time"}`
  })

  return (
    <div>
      <button onClick={updateCount}>
        Clicked {count} {count > 0 ? "times" : "time"}
      </button>
    </div>
  )
}

export default DocumentTitle
