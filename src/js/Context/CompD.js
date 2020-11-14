import React from "react"


import { testContext, anotherContext } from "../../app"

const CompD = () => {
    const test = React.useContext(testContext)
    const another = React.useContext(anotherContext)
        
    return (
        <div>
            <h3>Afa omo! no be small thing o</h3>
            {test} {another}
        </div>
    )
}

export default CompD