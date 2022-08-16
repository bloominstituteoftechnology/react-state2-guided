import { combineReducers } from 'redux'
import { getId } from '../utils/helpers'
import * as types from './action-types'

const initialForm = { name: '' }
function form(state = initialForm, action) {
  switch (action.type) {
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      return { ...state, [name]: value }
    }
    default:
      return state
  }
}

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos(state = initialTodos, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {

    }
    default:
      return state
  }
}

function displayCompleteds(state = true, action) {
  return state // just the boolean
}

export default combineReducers({
  form, todos, displayCompleteds
})
