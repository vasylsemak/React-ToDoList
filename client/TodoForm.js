import React from 'react';

export default (props) => {
  const { taskName, assignee, namePH, assigneePH, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input
        type='text'
        name='taskName'
        value={taskName}
        placeholder={namePH}
        onChange={handleChange}
      />
      <label htmlFor='assignee'>Assign To:</label>
      <input
        type='text'
        name='assignee'
        value={assignee}
        placeholder={assigneePH}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={taskName.length<1 || assignee.length<1 ? true : false}
      >Submit</button>
    </form>
  )
}
