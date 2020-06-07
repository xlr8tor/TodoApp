import React, { Component } from "react";
import AddTodo from "./components/addTodo";
import Navbar from "./components/navbar";
import InputField from "./components/inputField";
import Todos from "./components/todos";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "./custom.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayInput: false,
      input: "",
      submit: "",
      todos: [],
    };
    this.handelAddTodo = this.handelAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }
  handelAddTodo() {
    this.setState({
      displayInput: !this.state.displayInput,
    });
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => ({
      input: "",
    }));
  }

  addTodo = (todo) => {
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    const newTodo = {
      id: uuidv4(),
      todo,
      completed: false,
      date: dateTime,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  handleCheck(todo) {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].completed = !todo.completed;
    this.setState({ todos });
  }

  handleDelete = (todoId) => {
    const todos = this.state.todos.filter((todo) => todo.id !== todoId);
    this.setState({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalTodos={
            this.state.todos.filter((todo) => todo.completed === false).length
          }
        />
        <div className="container">
          {this.state.todos.length === 0 ? (
            <h2 className="defaultT">What would you like to do?</h2>
          ) : null}
          <AddTodo onAddTodo={this.handelAddTodo} />
          {this.state.displayInput ? (
            <InputField
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              value={this.state.input}
              addTodo={this.addTodo}
            />
          ) : null}
          <Todos
            todos={this.state.todos}
            onCheck={this.handleCheck}
            onDelete={this.handleDelete}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
