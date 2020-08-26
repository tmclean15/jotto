import React from 'react'
import { useSelector } from 'react-redux'

import { GuessedWordsWrapper } from './style'

const GuessedWords = (props) => {
  const guessedWords = useSelector((state) => state.guessedWords)

  let contents

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to guess the secret word!</span>
    )
  } else {
    const guessedWordsRows = guessedWords.map((word, index) => (
      <tr data-test="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ))

    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    )
  }
  return (
    <GuessedWordsWrapper data-test="component-guessed-words">
      {contents}
    </GuessedWordsWrapper>
  )
}

export default GuessedWords
