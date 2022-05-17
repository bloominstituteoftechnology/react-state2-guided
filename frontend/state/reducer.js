import { combineReducers } from 'redux'
import * as types from './action-types'
import { getId } from '../utils/helpers'

function count(countState = 0, action) {
  switch(action.type) {
    case types.INCREMENT: {
      return countState + action.payload
    }
    default:
      return countState
  }
}

function foo(fooState = 'foobar') {
  return fooState
}

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
function todos(todosState = initialTodos, action) {
  return todosState
}

export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
  count,
  todos,
  foo,
})
