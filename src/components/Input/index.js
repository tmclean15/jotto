import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { guessWord } from '../../actions'

const Input = (props) => {
  const success = useSelector((state) => state.success)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleChangeInput = (event) => {
    setInput(event.target.value)
  }

  const handleGuessWord = (event) => {
    event.preventDefault()

    dispatch(guessWord(input))
  }

  const contents = success ? null : (
    <form>
      <input
        data-test="input-box"
        type="text"
        placeholder="enter guess..."
        onChange={handleChangeInput}
      />
      <button data-test="submit-button" type="submit" onClick={handleGuessWord}>
        Submit
      </button>
    </form>
  )

  return <div data-test="component-input">{contents}</div>
}

export default Input
