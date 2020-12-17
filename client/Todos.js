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

  render () {
    const { todos } = this.state;
    const todoId = todos.length +1;
    console.log('Render TODOS->', todos);

    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo} todoId={todoId} />
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} />)
        }
      </div>
    )
  }
}
