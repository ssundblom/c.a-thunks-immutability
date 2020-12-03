import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


import { QuoteContainer } from './components/QuoteContainer'
import { QuoteControls } from './components/QuoteControls'
import { quotes } from './reducers/quotes'


const reducer = combineReducers({ quotes: quotes.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <QuoteContainer />
      <QuoteControls /> 
    </Provider>
  )
}
