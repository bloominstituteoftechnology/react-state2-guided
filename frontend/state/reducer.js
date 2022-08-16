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
    case types.ADD_NEW_TODO:
      return initialForm
    default:
      return state
  }
}

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos(todos = initialTodos, action) {
  switch (action.type) {
    case types.ADD_NEW_TODO: {
      const newTodo = action.payload
      return todos.concat(newTodo)
    }
    case types.TOGGLE_COMPLETION: {
      const id = action.payload
      return todos.map(td => {
        // ???
      })
    }
    default:
      return todos
  }
}

function displayCompleteds(state = true, action) {
  switch (action.type) {
    case types.TOGGLE_DISPLAY_COMPLETEDS:
      return !state
    default:
      return state
  }
}

export default combineReducers({
  form, todos, displayCompleteds
})
