import * as types from './action-types'

export function increment(amount) {
  return {
    type: types.INCREMENT,
    payload: amount,
  }
}

export function changeInput({ name, value }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { name, value }
  }
}

export function addTodo(todoName) {

}
