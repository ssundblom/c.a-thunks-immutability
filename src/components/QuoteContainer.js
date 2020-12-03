import React from 'react'
import { useSelector } from 'react-redux'


export const QuoteContainer = () => {
  const quote = useSelector(store => store.quotes.quote)

  return (
  <div> My Quote: {quote.author}, {quote.quote} </div>
  )
}