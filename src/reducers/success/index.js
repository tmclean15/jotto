import { actionTypes } from '../../actions'

/**
 * successReducer
 * @param {array} state - Array of guessed words.
 * @param {*} action - Action to be reduced.
 * @returns {boolean} - New success state.
 */
export default function successReducer(state = false, action) {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true
    default:
      return state
  }
}
