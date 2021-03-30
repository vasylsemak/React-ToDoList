import React, { useState } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'

export default ({ addTodo }) => {
  const [ taskName, setName ] = useState('')
  const [ assignee, setAssignee ] = useState('')

  function handleChange(evt) {
    evt.preventDefault()
    const name = evt.target.name
    const value = evt.target.value
    name === 'taskName' ? setName(value) : setAssignee(value)
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    clearInput()
    const { data } = await axios.post('/api/todos', { taskName, assignee })
    addTodo(data)
  }

  function clearInput() {
    setName('')
    setAssignee('')
  }

  return (
    <TodoForm
      taskName={taskName}
      assignee={assignee}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}
