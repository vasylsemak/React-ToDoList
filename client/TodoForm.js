import React from 'react';

export default (props) => {
  const { taskName, assignee, handleChange, handleSubmit, stateT } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input
        type='text'
        name='taskName'
        value={taskName}
        onChange={handleChange}
      />
      <label htmlFor='assignee'>Assign To:</label>
      <input
        type='text'
        name='assignee'
        value={assignee}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  )
}