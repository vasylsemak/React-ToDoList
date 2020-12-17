import React, { Component } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';

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
    this.clearInput = this.clearInput.bind(this);
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

    this.clearInput();

    await axios.post('/api/todos', { taskName, assignee });
    const { addTodo, todoId } = this.props;
    addTodo({
      id: todoId,
      taskName: taskName,
      assignee: assignee,
    });
  }

  clearInput() {
    this.setState({
      id: 0,
      taskName: '',
      assignee: ''
    });
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
