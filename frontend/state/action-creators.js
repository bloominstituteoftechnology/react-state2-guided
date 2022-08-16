import { getId } from '../utils/helpers'
import * as types from './action-types'

// put your action creators here
export function changeInput({ name, value }) {
  return { type: types.INPUT_CHANGE, payload: { name, value } }
}
export function addTodo(todoName) {
  const newTodo = { id: getId(), completed: false, name: todoName }
  return { type: types.ADD_NEW_TODO, payload: newTodo }
}
export function toggleShouldShow() {
  return { type: types.TOGGLE_DISPLAY_COMPLETEDS }
}
export function toggleCompleted(id) {
  return { type: types.TOGGLE_COMPLETION }
}
