import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

const Todos = () => {
  const [ todos, setTodos ] = useState([])

  useEffect(() => {
    (async function() {
      const { data } = await axios.get('/api/todos')
      setTodos(data)
    })()
  }, [])

  function addTodo(todo) {
    const todosUpdated = [ ...todos, todo ]
    setTodos(todosUpdated)
  }

  async function removeTodo(todoId) {
    await axios.delete(`/api/todos/${todoId}`)
    const todosUpdated = todos.filter(t => t.id !== todoId)
    setTodos(todosUpdated)
  }

  return (
    <div id='todos'>
      <CreateTodo addTodo={addTodo} />
      {
        todos.map(todo =>
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
        )
      }
    </div>
  )
}

export default Todos
