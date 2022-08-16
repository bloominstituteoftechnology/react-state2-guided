import React from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { connect } from 'react-redux'

function App(props) {
  const onChange = ({ name, value }) => {

  }
  const onSubmit = () => {

  }
  const toggleShouldShow = () => {

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
        onChange={onChange}
        disabled={!props.form.name.length}
        values={props.form}
      />
      <button onClick={toggleShouldShow}>
        {props.displayCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </div>
  )
}

export default App
