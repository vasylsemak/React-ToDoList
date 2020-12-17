import React, {Component} from 'react'

export default class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const taskName = event.target.taskName.value;
    const assignee = event.target.assignee.value;
    this.setState({ taskName, assignee });
    console.log('State ->', this.state);
  }

  render () {
    const { taskName, assignee } = this.state;
    console.log('taskName ->', taskName, 'assignee ->', assignee);

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
