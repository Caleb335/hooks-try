import React from "react"
import PropTypes from "prop-types"

const CardExample = ({ children }) => {
  return <div>{children}</div>
}

export default CardExample

CardExample.propTypes = {
  children: PropTypes.node.isRequired,
}
