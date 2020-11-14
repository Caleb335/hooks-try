import React from "react"
import Count from "./js/components/Count"
import DocumentTitle from "./js/components/DocumentTitle"
import FormHook from "./js/components/FormHook"
import ToggleComponent from "./js/components/ToggleComp"
import CompA from "./js/Context/CompA"

export const testContext = React.createContext()
export const anotherContext = React.createContext()

const App = () => {
  return (
    <div className='app__base'>
      <h1>Hello Hooks</h1>
      <Count />
      <FormHook />
      <DocumentTitle />
      <ToggleComponent top={"4%"} />
      <testContext.Provider value={"God take control please"}>
        <anotherContext.Provider value={"we beg of you"}>
        <CompA />
        </anotherContext.Provider>
      </testContext.Provider>
    </div>
  )
}

export default App
