import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      isEditing: false,
      currentId: "",
      currentValue: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    // console.log(this.state.value);
  };

  createItem = (e) => {
    e.preventDefault();

    let obj = {
      id: new Date().getTime(),
      name: this.state.value,
    };
    this.setState({ todos: this.state.todos.concat(obj) });
    this.setState({ value: "" });
  };

  handleDelete = (index) => {
    this.state.todos = [...this.state.todos].filter(
      (item) => item.id !== index
    );
    this.setState({
      value: this.setState.todos,
    });
  };

  onToggleEdit = (item) => {
    this.setState({ isEditing: true });
    this.setState({ currentId: item.id });
    this.setState({ currentValue: item.name });
  };

  onEditInputChange = (e) => {
    this.setState({ currentValue: e.target.value });
  };

  onSubmitEditTodo = (e) => {
    e.preventDefault();
    this.onEditTodo(this.state.currentId, this.state.currentValue);
    this.setState({ isEditing: false });
  };

  onEditTodo = (currentId, newValue) => {
    this.state.todos.map((item) => {
      if (item.id === currentId) {
        item.name = newValue;
      }
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>React TODO LIST</h1>
        </div>
        <div className="formOuterStyle">
          {this.state.isEditing === false ? (
            <form action="" className="formStyle ">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.value}
                  placeholder="Type Your Text"
                />
              </div>
              <div className="form-group">
                <button onClick={(e) => this.createItem(e)}>Create</button>
              </div>
            </form>
          ) : (
            <form action="" className="formStyle ">
              <div className="form-group">
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={this.onEditInputChange}
                  value={this.state.currentValue}
                  placeholder="Edit Your Text"
                />
              </div>
              <div className="form-group">
                <button onClick={(e) => this.onSubmitEditTodo(e)}>Edit</button>
              </div>
            </form>
          )}
        </div>

        {this.state.todos.map((item, index) => {
          return (
            <li key={index} className="itemStyle">
              {item.name}
              <button
                className="deleteBtn"
                onClick={() => this.handleDelete(item.id)}
              >
                Delete
              </button>
              <button
                className="editBtn"
                onClick={() => this.onToggleEdit(item)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </>
    );
  }
}

export default App;
