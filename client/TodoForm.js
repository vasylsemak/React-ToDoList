import React from 'react';

export default (props) => {
  const { taskName, assignee, namePH, assigneePH, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='taskName'>
        Task Name:
        <span className='warning'>Required!</span>
      </label>
      <input
        type='text'
        name='taskName'
        value={taskName}
        placeholder={namePH}
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
        placeholder={assigneePH}
        onChange={handleChange}
      />
      <button
        type='submit'
        disabled={!taskName || !assignee ? true : false}
      >Submit</button>
    </form>
  )
}
