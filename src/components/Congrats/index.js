import React from 'react'
import { useSelector } from 'react-redux'

import { CongratsWrapper } from './style'

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.element} - Rendered component (or null if `success` prop is true)
 */
const Congrats = (props) => {
  const success = useSelector((state) => state.success)

  if (success) {
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

export default Congrats
