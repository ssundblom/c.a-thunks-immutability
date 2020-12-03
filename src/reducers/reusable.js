import { quotes } from './quotes'

export const generateNewQuote = () => {

  return (dispatch) => {
      fetch('http://freequote.herokuapp.com/')
        .then(res => res.json())
        .then(data => { 
          dispatch(quotes.actions.onNewQuote(data))
        })
  }
}

