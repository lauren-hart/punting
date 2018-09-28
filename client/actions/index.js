import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_BETS = 'RECEIVE_BETS'
export const REQUEST_BETS = 'REQUEST_BETS'

export const requestBets = () => {
  return {
    type: REQUEST_BETS
  }
}

// Receive bets

export const receiveBets = (bets) => {
  return {
    type: RECEIVE_BETS,
    bets
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function fetchBets () {
  return (dispatch) => {
    dispatch(requestBets())
    return request
      .get(`/api/v1/bets`)
      .then(res => {
        dispatch(receiveBets(res.body))
        console.log('success', res.body)
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
