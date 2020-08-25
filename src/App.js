import React, { Component } from 'react'
import styled from 'styled-components'

import { GuessedWords, Congrats } from './components'

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

class App extends Component {
  render() {
    return (
      <AppWrapper className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
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
}

export default App
