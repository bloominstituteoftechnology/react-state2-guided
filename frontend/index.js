import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import './styles/reset.css'
import './styles/styles.css'

// ==================== redux-related scaffolding start ====================
import { Provider } from 'react-redux'
import { legacy_createStore, compose } from 'redux'
import reducer from './state/reducer'

let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = legacy_createStore(reducer, composeEnhancers())
}
resetStore()
// ===================== redux-related scaffolding end =====================

const container = document.getElementById('root')
const root = createRoot(container)

// todo: wrap the App in the Provider
root.render(
  <App />
)
