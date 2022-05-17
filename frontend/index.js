import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'

import './styles/reset.css'
import './styles/styles.css'

// redux-related imports
import { Provider } from 'react-redux'
import { legacy_createStore, compose } from 'redux'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)
