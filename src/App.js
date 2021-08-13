import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Projects/Header';
import Form from './components/Projects/Form';
import TodosList from './components/Projects/TodosList';
import FeatHeader from './components/Features/FeatHeader';
import FeatForm from './components/Features/FeatForm';
import FeatTodo from './components/Features/FeatTodo';
import TodoForm from './components/Todo/TodoForm';
import TodoHeader from './components/Todo/TodoHeader';
import TodoTodos from './components/Todo/TodoTodos';


const App = () => {
  function Projects() {
    const initialState = JSON.parse(localStorage.getItem('todos')) || [];
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    })
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo} />
          </div>
          <div>
            <TodosList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo} />
          </div>
        </div>
      </div>
    );
  }


  function Features() {
    const initialState = JSON.parse(localStorage.getItem('todostwo')) || [];
    const [input, setInput] = useState("");
    const [todostwo, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
      localStorage.setItem('todostwo', JSON.stringify(todostwo));
    })
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <FeatHeader />
          </div>
          <div>
            <FeatForm
              input={input}
              setInput={setInput}
              todos={todostwo}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo} />
          </div>
          <div>
            <FeatTodo
              todos={todostwo}
              setTodos={setTodos}
              setEditTodo={setEditTodo} />
          </div>
        </div>
      </div>
    );
  }

  function Todo() {
    const initialState = JSON.parse(localStorage.getItem('todosthree')) || [];
    const [input, setInput] = useState("");
    const [todosthree, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);
    useEffect(() => {
      localStorage.setItem('todosthree', JSON.stringify(todosthree));
    })
    return (
      <div className="container">
        <div className="app-wrapper">
          <div>
            <TodoHeader />
          </div>
          <div>
            <TodoForm
              input={input}
              setInput={setInput}
              todos={todosthree}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo} />
          </div>
          <div>
            <TodoTodos
              todos={todosthree}
              setTodos={setTodos}
              setEditTodo={setEditTodo} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App