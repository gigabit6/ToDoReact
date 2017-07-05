import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

class Todo extends Component {
  completeTodo (event) {
    event.preventDefault()
    TodoActions.completeTodo(this.props.id)
  }
  render () {
    return (
      <li>
        {this.props.title} - {this.props.completed
        ? 'DONE'
        : (
          <button onClick={this.completeTodo.bind(this)}> Complete</button>
        )}
      </li>
    )
  }
}

export default Todo
