import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/todos');
    this.setState({ todos: data });
  }

  addTodo(todo) {
    const todos = this.state.todos;
    const todosUpdated = [...todos, todo];
    this.setState({ todos: todosUpdated });
  }

  async removeTodo(todoId) {
    await axios.delete(`/api/todos/${todoId}`);
    const todos = this.state.todos;
    const todosUpdated = todos.filter( t => t.id !== todoId);
    this.setState({ todos: todosUpdated });
  }

  render () {
    const { todos } = this.state;

    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo} />
        {
          this.state.todos.map(todo =>
            <Todo key={todo.id} todo={todo} removeTodo={this.removeTodo} />
          )
        }
      </div>
    )
  }
}
