import React, { useState } from "react";
import './TodoList.css'; // Import your custom CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleAddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  }

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  
  const handleUpdateTodo = (index) => {
    setIsEditing(true);
    setInput(todos[index]);
    setCurrentIndex(index);
  }
  const edit_todo = () => {
    if (isEditing) {
      const updatedTodos = todos.map((todo, index) => (
        index === currentIndex ? input : todo
      ));
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentIndex(null);

  }
}

  return (
    <div className="container mt-5">
      <h1 className=" mb-4">ToDo-List</h1>
      
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          
        </button>
      </div>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item" on>
            {todo}
            <div className="btn-group">
              <button className="btn btn-danger delete-btn" onClick={() => handleRemoveTodo(index)}>✕</button>
              <button className="btn btn-primary edit-btn" onClick={() => handleUpdateTodo(index)}>✎
              {isEditing ? 'Update' : 'Add'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
