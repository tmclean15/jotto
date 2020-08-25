import { getLetterMatchCount } from '../util'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
}

/**
 * An action creator that takes a guessed word, and both adds the word to the guessed words state, as well as checks if the guessed word is correct
 * @param {string} guessedWord - The word guessed by the user
 * @returns {function} Thunk middleware function that dispatches GUESS_WORD and CORRECT_GUESS actions
 */
export function guessWord(guessedWord) {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {
        guessedWord,
        letterMatchCount,
      },
    })

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS,
      })
    }
  }
}
