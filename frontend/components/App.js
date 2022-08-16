import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

function App(props) {

  const onChange = ({ name, value }) => {

  }
  const onSubmit = () => {

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
      <TodoList
        todos={state.todos}
        displayCompleteds={state.displayCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        disabled={!state.form.name.length}
        values={state.form}
      />
      <button onClick={toggleShouldShow}>
        {state.displayCompleteds ? 'Hide' : 'Show'} Completed
      </button>
    </div>
  )
}

export default App
