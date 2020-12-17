import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const taskName = event.target.taskName.value;
    const assignee = event.target.assignee.value;
    this.setState({ taskName, assignee });
    console.log('State ->', this.state);

    await axios.post('/api/todos', { taskName, assignee });
    const { addTodo, todoId } = this.props;
    addTodo({
      id: todoId,
      taskName: taskName,
      assignee: assignee,
    });
  }

  render () {
    const { taskName, assignee } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='taskName'>Task Name:</label>
        <input
          type='text'
          name='taskName'
          value={this.state.taskName}
          onChange={this.handleChange}
        />
        <label htmlFor='assignee'>Assign To:</label>
        <input
          type='text'
          name='assignee'
          value={this.state.assignee}
          onChange={this.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
