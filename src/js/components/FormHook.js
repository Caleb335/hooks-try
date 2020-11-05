import React from "react"

const FormHook = () => {
  const [name, setName] = React.useState({ firstName: "", lastName: "" })

  return (
    <div>
      <form>
        <input
          type='text'
          value={name.firstName}
          onChange={e => {
            e.target.value
          }}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => {
            e.target.value
          }}
        />
      </form>
      <h3>{name.firstName}</h3>
      <h3>{name.lastName}</h3>
    </div>
  )
}
