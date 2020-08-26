import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { GuessedWords, Congrats, Input } from './components'
import { getSecretWord } from './actions'

const AppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

function App(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSecretWord())
  }, [dispatch])

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
