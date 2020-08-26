import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import {
  findByTestAttr,
  checkProps,
  storeFactory,
} from '../../../test/testUtils'
import GuessedWords from './'

const setup = (state = {}) => {
  const store = storeFactory(state)
  return mount(
    <Provider store={store}>
      <GuessedWords />
    </Provider>
  )
}

describe('if there are no words guessed', () => {
  let wrapper
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.hostNodes().length).toBe(1)
  })

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('if there are words guessed', () => {
  let wrapper

  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'party', letterMatchCount: 5 },
    { guessedWord: 'agile', letterMatchCount: 1 },
  ]

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.hostNodes().length).toBe(1)
  })

  test('renders "guessed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })

  test('correct number of guessed words', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsNode.length).toBe(guessedWords.length)
  })
})
