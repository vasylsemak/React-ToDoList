import React, {Component} from 'react';
// import TodoForm from './TodoForm';

export default class UpdateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    }
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [ name ]: value });
  }

  render () {
    return (
      <TodoForm
        taskName={this.state.taskName}
        assignee={this.state.assignee}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        stateT={this.state}
      />
    )
  }
}
