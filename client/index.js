import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {HashRouter as Router} from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <App />
        </div>
      </Router>,
    // </Provider>,
    document.getElementById('app'))
})

// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import { HashRouter as Router } from 'react-router-dom'

// import reducers from './reducers'
// import App from './components/App'

// const store = createStore(reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

// document.addEventListener('DOMContentLoaded', () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>,
//     document.getElementById('app')
//   )
// })
