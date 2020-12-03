import React from 'react'
import { useDispatch } from 'react-redux'

import { quotes } from '../reducers/quotes'
import { generateNewQuote } from '../reducers/reusable'

export const QuoteControls = () => {
  const dispatch = useDispatch()

  const onNewQuote = () => {
    dispatch(generateNewQuote())
  }

  const onPrevious = () => {
    dispatch(quotes.actions.onPrevious())
  }


  return (
    <div>    
      <button onClick={onNewQuote}>
      New Quote
  </button>
      <button onClick={onPrevious}>
        Previous Quote
    </button>
    </div>


  )
}