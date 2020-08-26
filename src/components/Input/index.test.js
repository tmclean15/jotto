import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import { findByTestAttr, storeFactory } from '../../../test/testUtils'
import Input from '../Input'

const setup = (store) => {
  const wrapper = mount(
    <Provider store={store}>
      <Input />
    </Provider>
  )

  return wrapper
}

describe('Input component render', () => {
  describe('word has not been guessed', () => {
    let wrapper
    let store
    beforeEach(() => {
      const initialState = { success: false }
      store = storeFactory(initialState)
      wrapper = setup(store)
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box')
      expect(component.length).toBe(1)
    })

    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button')
      expect(component.length).toBe(1)
    })
  })
  describe('word has been guessed', () => {
    let wrapper
    let store
    beforeEach(() => {
      const initialState = { success: true }
      store = storeFactory(initialState)
      wrapper = setup(store)
    })

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input')
      expect(component.length).toBe(1)
    })

    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })

    test('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('Input component update state', () => {
  const secretWord = 'party'
  const incorrectGuess = 'train'

  let wrapper
  let store
  beforeEach(() => {
    const initialState = { success: false, secretWord, guessedWords: [] }
    store = storeFactory(initialState)
    wrapper = setup(store)
  })

  test('adds the guessed word to guessedWords state in redux store on input submit', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    inputBox.simulate('change', { target: { value: incorrectGuess } })

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click')

    const newState = store.getState()

    const expectedState = {
      success: false,
      secretWord,
      guessedWords: [
        {
          guessedWord: incorrectGuess,
          letterMatchCount: 3,
        },
      ],
    }

    expect(newState).toEqual(expectedState)
  })

  test('updates success state in redux store if input submitted is correct', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    inputBox.simulate('change', { target: { value: secretWord } })

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click')

    const newState = store.getState()

    const expectedState = {
      success: true,
      secretWord,
      guessedWords: [
        {
          guessedWord: secretWord,
          letterMatchCount: 5,
        },
      ],
    }

    expect(newState).toEqual(expectedState)
  })
})
