import { getId } from '../utils/helpers'
import * as types from './action-types'

// put your action creators here
export function changeInput({ name, value }) {
  return { type: types.INPUT_CHANGE, payload: { name, value } }
}
export function addTodo(todoName) {
  return { type: types.ADD_NEW_TODO, payload: todoName }
}
