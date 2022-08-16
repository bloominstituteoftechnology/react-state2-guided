import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  toggleStatus = id => () => {
    this.props.toggleCompleted(id)
  }
  render() {
    const { todos, displayCompleteds, toggleStatus } = this.props
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {
          todos.reduce((acc, td) => {
            if (displayCompleteds || !td.completed) return acc.concat(
              <Todo
                todo={td}
                key={td.id}
                toggleStatus={toggleStatus}
              />
            )
            return acc
          }, [])
        }
      </div>
    )
  }
}

export default connect(st => st, actions)(TodoList)
