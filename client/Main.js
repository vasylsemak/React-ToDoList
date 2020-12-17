import React, {Component} from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Todos from './Todos'
import SingleTodo from './SingleTodo'

export default class Main extends Component {
  render () {
    return (
      <Router>
        <div id='main'>
          <h1>Todos</h1>
          <Route exact path='/' component={Todos} />
          <Route path='/todos/:todoId' component={SingleTodo} />
        </div>
      </Router>
    )
  }
}
