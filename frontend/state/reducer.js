import { combineReducers } from 'redux'
import { getId } from '../utils/helpers'
import * as types from './action-types'

// put your reducer functions here
// each reducer takes care of a single
// slice of state
const initialForm = { name: '' }
function form(state = initialForm, action) {
  return state // just the form
}

const initialTodos = 
function todos (state, action) {
  return state
}

function displayCompleteds (state = true, action) {
  return state // just the boolean
}



export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
})
