import { combineReducers } from 'redux'
import { getId } from '../utils/helpers'
import * as types from './action-types'

// put your reducer functions here
// each reducer takes care of a single
// slice of state
const initialForm = { name: '' }
function form(state, action) {
  return state // just the form
}

export default combineReducers({
  // here go your reducers combined
  // into one super big reducer
})
