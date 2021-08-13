import React from 'react'

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodosList