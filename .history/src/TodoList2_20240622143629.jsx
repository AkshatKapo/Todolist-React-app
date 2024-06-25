import React, { useEffect, useState } from "react";
import './TodoList.css'; // Import your custom CSS file


const TodoList2 = () => {
  const [todos, settodo] = useState([]);
  const [input,setnput]= useState('');
  const [Editing,setEditing] = useState(null);

  const input_todo =()=>{
    
  }


  return (
    <div className="container mt-5">
      <h1 className="mb-4">ToDo-List</h1>
      <div className="input-group">
        <input
          type="text"
          className="input-group"
          value={input}
          onChange={input_todo}
          placeholder="Add a new task"
        ></input>
        <button className="btn btn-primary" onClick={add_todo}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            <span>{todo}</span>
            <div className="btn-group">
              <button
                className="btn btn-danger delete-btn"
                onClick={() => handleRemoveTodo(index)}
              >
                ✕
              </button>
              <button
                className="btn btn-primary edit-btn"
                onClick={() => handleEditButtonClick(index)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList2;
