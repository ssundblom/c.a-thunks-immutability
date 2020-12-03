import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quotes } from '../reducers/quotes'
import { generateNewQuote } from '../reducers/reusable'

export const QuoteControls = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const author = useSelector(store => store.quotes.author)

  useEffect(() => {
    generateNewQuote()
  }, [author])

  const onNewQuote = () => {
    dispatch(generateNewQuote())
  }

  const onPrevious = () => {
    dispatch(quotes.actions.onPrevious())
  }

  const updateAuthor = () => {
    dispatch(quotes.actions.updateAuthor(inputValue))
  }

 
  
  return (
    <div className='qoute-controls'>
      <div className='qoute-buttons-container'>
        <button
          className='quote-button'
          onClick={onNewQuote}
        >
          New Quote
        </button>
        <button
          className='quote-button'
          onClick={onPrevious}
        >
          Previous Quote
        </button>
      </div>
      <div className='quote-input-container'>
        <input
          placeholder='Type your author...'
          className='quote-input'
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button 
          onClick={updateAuthor}
          className='quote-input-button quote-button'>
          Check author
        </button>
      </div>
    </div>

  )
}