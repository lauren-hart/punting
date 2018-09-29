// import request from 'superagent'

// export const GET_BETS_PENDING = 'SHOW_ERROR'
// export const GET_BETS = 'RECEIVE_BETS'
// export const GET_BETS_ERROR = 'REQUEST_BETS'

// export const requestBets = () => {
//   return {
//     type: GET_BETS_PENDING
//   }
// }

// // Receive bets

// export const receiveBets = (bets) => {
//   return {
//     type: GET_BETS,
//     bets: bets
//   }
// }

// export const showError = (errorMessage) => {
//   return {
//     type: GET_BETS_ERROR,
//     errorMessage: errorMessage
//   }
// }

// export function fetchBets () {
//   // this works
//   console.log('hi')
//   // this doesn't.... going to the back end
//   return (dispatch) => {
//     dispatch(requestBets())
//     return request
//       .get(`/api/v1/bets`)
//       .then(res => {
//         dispatch(receiveBets(res.body.bets))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }

import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_BETS = 'RECEIVE_BETS'
export const REQUEST_BETS = 'REQUEST_BETS'

export const requestBets = () => {
  return {
    type: REQUEST_BETS
  }
}

export const receiveBets = (bets) => {
  return {
    type: RECEIVE_BETS,
    bets: bets.map(bet => bet.data)
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
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
