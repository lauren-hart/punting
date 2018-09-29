import {
  REQUEST_BETS,
  RECEIVE_BETS,
  SHOW_ERROR} from '../actions'

const defaultState = {
  bets: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, bets, type}) {
  switch (type) {
    case REQUEST_BETS:
      return Object.assign({error: null, pending: true}, state)
      // return {
      //   ...state,
      //   error: null,
      //   pending: true
      // }

    case RECEIVE_BETS:
      return Object.assign({error: null, pending: false, bets}, state)
      // return {
      //   ...state,
      //   bets,
      //   error: null,
      //   pending: false
      // }

    case SHOW_ERROR:
      return Object.assign({error, pending: false, bets: null}, state)
      // return {
      //   ...state,
      //   bets: null,
      //   error,
      //   pending: false
      // }

    default:
      return state
  }
}
