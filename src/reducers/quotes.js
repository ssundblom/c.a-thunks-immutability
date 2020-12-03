import { createSlice } from '@reduxjs/toolkit'

export const quotes = createSlice({
  name: 'quotes',
  initialState: {
    quote: {},
    history: [],
    author: ''
  }, 
  reducers: {
    onNewQuote: (state, action) => {
      state.history = [...state.history, state.quote]
      state.quote = action.payload
    },
    onPrevious: state => {
     if (state.history.length > 0) {
      state.quote = state.history[state.history.length -1]
      state.history = state.history.slice(0, state.history.length -1)
    }
    },
    updateAuthor: (state, action) => {
      state.author = action.payload
    }
  }
  
})