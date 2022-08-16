import { combineReducers } from 'redux'
import { getId } from '../utils/helpers'
import * as types from './action-types'

const initialForm = { name: '' }
function form(state = initialForm, action) {
  debugger
  return state // just the form object
}

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos(state = initialTodos, action) {
  return state // just the array
}

function displayCompleteds(state = true, action) {
  return state // just the boolean
}

export default combineReducers({
  form, todos, displayCompleteds
})
