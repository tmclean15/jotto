import React from 'react'
import PropTypes from 'prop-types'

import { CongratsWrapper } from './style'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.element} - Rendered component (or null if `success` prop is true)
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <CongratsWrapper data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </CongratsWrapper>
    )
  } else {
    return <div data-test="component-congrats" />
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats
