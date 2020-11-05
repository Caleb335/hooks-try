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
            // spread the name variable, so it copies all the name object,
            // but then override it with the next argument which is "firstName"
            setName({ ...name, firstName: e.target.value })
            // useState doesn't automatically merge
            // and update the object, this is the key diff between the setState() common to class components.
          }}
        />
        <input
          type='text'
          value={name.lastName}
          onChange={e => {
            setName({ ...name, lastName: e.target.value })
          }}
        />

        <h3>Your first name is: {name.firstName}</h3>
        <h3>Your last name is: {name.lastName}</h3>
      </form>
    </div>
  )
}

export default FormHook
