import React from "react"
import propTypes from "prop-types"


// Put providers here
export const wrapRootElement = ({ element }) => {
  return <div>{element}</div>
}

wrapRootElement.propTypes = {
  element: propTypes.any.isRequired,
}