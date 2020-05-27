import propTypes from "prop-types"
import React from "react"


// Put providers here
export const wrapRootElement = ({ element }) => {
  return <div>{element}</div>
}

wrapRootElement.propTypes = {
  element: propTypes.any.isRequired,
}