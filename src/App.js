import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

class App extends Component {
  state ={
    todos: [
      {
        id:1,
        title:'take out the trash',
        completed: false
      },
      {
        id:2,
        title:'wash the dogs',
        completed: false
      },
      {
        id:3,
        title:'walk the dogs',
        completed: false
      }
  ]
  }
  // Switch between true and false
  markComplete =(id)=> {
    this.setState ( { todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed=!todo.completed
      }
      return todo;
    }) });
  }
  //Delete Todo
  delTodo = (id)=> {
    this.setState({ todos: [...this.state.todos.filter(todo =>todo.id !==id)]})
  }
  render() {
   
    return (
      <div className="App">
      <Header/>
      <Todos todos={this.state.todos} markComplete ={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
