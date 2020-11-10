import React from "react"
import Count from "./js/components/Count"
import DocumentTitle from "./js/components/DocumentTitle"
import FormHook from "./js/components/FormHook"

const App = () => {
  return (
    <div className='app__base'>
      <h1>Hello Hooks</h1>
      <Count />
      <FormHook />
      <DocumentTitle />
    </div>
  )
}

export default App
