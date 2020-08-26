import React from 'react'
import styled from 'styled-components'

import { GuessedWords, Congrats, Input } from './components'
import { useSelector } from 'react-redux'

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

function App(props) {
  return (
    <AppWrapper className="App">
      <h1>Jotto</h1>
      <Congrats />
      <Input />
      <GuessedWords
        guessedWords={[
          { guessedWord: 'train', letterMatchCount: 3 },
          { guessedWord: 'party', letterMatchCount: 5 },
          { guessedWord: 'agile', letterMatchCount: 1 },
        ]}
      />
    </AppWrapper>
  )
}

export default App
