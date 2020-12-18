import React, {Component} from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';

export default class UpdateTodo extends Component {
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
    this.setState({ [ name ]: value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const taskName = event.target.taskName.value;
    const assignee = event.target.assignee.value;

    const { todo, updateTodo } = this.props;
    const { data } =
      await axios.put(`/api/todos/${todo.id}`, { taskName , assignee });
    updateTodo(data);
  }

  render () {
    return (
      <TodoForm
        taskName={this.state.taskName}
        assignee={this.state.assignee}
        namePH={this.props.todo.taskName}
        assigneePH={this.props.todo.assignee}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
