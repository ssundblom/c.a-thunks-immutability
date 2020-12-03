import React from 'react'
import { useSelector } from 'react-redux'


export const QuoteContainer = () => {
  const quote = useSelector(store => store.quotes.quote)

  return (
    <div className='quote-contatiner'>
      <h2> Quote of the day :</h2>
      <p className='quote-text'>
        {quote.quote}</p>
    </div>
  )
}