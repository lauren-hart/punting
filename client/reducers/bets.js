// import {
//   GET_BETS_PENDING,
//   GET_BETS,
//   GET_BETS_ERROR} from '../actions'

// const defaultState = {
//   bets: null,
//   error: null,
//   pending: false
// }

// export default function (state = defaultState, {error, bets, type}) {
//   switch (type) {
//     case GET_BETS_PENDING:
//       return {
//         // ...state,
//         state,
//         error: null,
//         pending: true
//       }

//     case GET_BETS:
//       return {
//         // ...state,
//         state,
//         bets,
//         error: null,
//         pending: false
//       }

//     case GET_BETS_ERROR:
//       return {
//         // ...state,
//         state,
//         bets: null,
//         error,
//         pending: false
//       }

//     default:
//       return state
//   }
// }