import React from 'react';

export default ({ taskName, assignee, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor='taskName'>
      Task Name:
      <span className='warning'>Required!</span>
    </label>
    <input
      type='text'
      name='taskName'
      value={taskName}
      onChange={handleChange}
    />
    <label htmlFor='assignee'>
      Assign To:
      <span className='warning'>Required!</span>
    </label>
    <input
      type='text'
      name='assignee'
      value={assignee}
      onChange={handleChange}
    />
    <button
      type='submit'
      disabled={!taskName || !assignee ? true : false}
    >Submit</button>
  </form>
)

