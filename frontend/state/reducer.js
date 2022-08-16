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

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos (state = initialTodos, action) {
  return state
}

function displayCompleteds (state = true, action) {
  return state // just the boolean
}



export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
})
