import { combineReducers } from 'redux'
import * as types from './action-types'

function count(countState = 0, action) {
  switch(action.type) {
    case types.INCREMENT: {
      return 
    }
    default:
      return countState
  }
}

export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
  count,
})
