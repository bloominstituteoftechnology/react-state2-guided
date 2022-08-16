import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function App(props) {
  const onSubmit = () => {
    props.addTodo(props.form.name)
  }
  const toggleShouldShow = () => {
    props.toggleShouldShow()
  }
  const toggleStatus = id => () => {

  }
  return (
    <div>
      <h1>Todo App</h1>
      <TodoList
        todos={props.todos}
        displayCompleteds={props.displayCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={props.changeInput}
        disabled={!props.form.name.length}
        values={props.form}
      />
      <button onClick={toggleShouldShow}>
        {props.displayCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </div>
  )
}

// this is how we 'connect' a component to Redux
export default connect(st => st, actions)(App) // this brings ALL the states

// export default connect(st => ({ // this brings ONLY todos and displayCompleteds
//   todos: st.todos,
//   displayCompleteds: st.displayCompleteds,
// }))(App)
