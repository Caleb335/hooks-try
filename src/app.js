import React from "react"
import Count from "./js/components/Count"
import FormHook from "./js/components/FormHook"

const App = () => {
  return (
    <div className='app__base'>
      <h1>Hello Hooks</h1>
      <Count />
      <FormHook />
    </div>
  )
}

export default App
