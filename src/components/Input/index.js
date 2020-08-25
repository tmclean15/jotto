import React from 'react'
import { useSelector } from 'react-redux'

const Input = (props) => {
  const success = useSelector((state) => state.success)

  const contents = success ? null : (
    <form>
      <input data-test="input-box" type="text" placeholder="enter guess..." />
      <button data-test="submit-button" type="submit">
        Submit
      </button>
    </form>
  )

  return <div data-test="component-input">{contents}</div>
}

export default Input
