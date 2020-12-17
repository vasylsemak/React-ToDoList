import React from 'react'
import {Link} from 'react-router-dom'

const Todo = ({ todo, removeTodo }) => {
  const { id, taskName, assignee } = todo;

  return (
    <div className='todo row' key={id}>
      <div className='column'>
        <Link to={`/todos/${id}`}>
          <h3>{taskName}</h3>
        </Link>
        <p>Assigned to: {assignee}</p>
      </div>
      <div className='column'>
        <button
          className='remove'
          onClick={() => removeTodo(id)}
        >Remove</button>
      </div>
    </div>
  )
}

export default Todo
