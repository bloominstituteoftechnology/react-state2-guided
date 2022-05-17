import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { getId } from '../utils/helpers'

import { connect } from 'react-redux' // utility to "connect"
import { increment } from '../index' // action creator

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]
const initialForm = {
  name: '',
}
const initialState = {
  form: initialForm,
  todos: initialTodos,
  displayCompleteds: true,
}

function App(props) {
  // via props, we can access "count"
  // and via props, we access "increment"
  const [state, setState] = useState(initialState)

  const onChange = ({ name, value }) => {
    setState({ ...state, form: { [name]: value } })
  }
  const onSubmit = () => {
    setState({
      ...state,
      form: initialForm,
      todos: state.todos.concat({
        id: getId(),
        name: state.form.name,
        completed: false,
      }),
    })
  }
  const toggleShouldShow = () => {
    setState({
      ...state,
      displayCompleteds: !state.displayCompleteds
    })
  }
  const toggleStatus = id => () => {
    setState({
      ...state,
      todos: state.todos.map(td => {
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
  }
  return (
    <div>
      <h1>Todo App</h1>
      <span>{props.count}</span>
      <button onClick={evt => }>inc</button>
      <TodoList
        todos={state.todos}
        displayCompleteds={state.displayCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        toggleShouldShow={toggleShouldShow}
        displayCompleteds={state.displayCompleteds}
        disabled={!state.form.name.length}
        values={state.form}
      />
    </div>
  )
}

// by connecting, each slice of state
// and each A.C. arrives into the component via props
export default connect(st => st, {increment})(App)
