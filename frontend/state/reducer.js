import { combineReducers } from 'redux'
import * as types from './action-types'

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

function todos(todosState = ) {

}

export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
  count,
  foo,
})
