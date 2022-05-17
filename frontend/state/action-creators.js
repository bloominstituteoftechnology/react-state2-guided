import * as types from './action-types'

// put your action creators here
export function increment(amount) {
  return {
    type: types.INCREMENT,
    payload: amount,
  }
}
