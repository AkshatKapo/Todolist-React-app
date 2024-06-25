import React, { useEffect, useState } from "react";
import "./TodoList.css"; // Import your custom CSS file

const TodoList2 = () => {

  // State to store the list of todos
  const [todos, settodo] = useState(()=>{
    const storage_todo = localStorage.getItem('todos')
    return storage_todo ? JSON.parse(storage_todo):[];

  });
  // State to store the current input value
  const [input, setinput] = useState("");
  // State to store the index of the todo being edited
  const [Editing, setEditing] = useState(null);

  useEffect(() =>{
    localStorage.setItem('todos',)
  })

  // Function to handle input change
  const input_todo = (e) => {
    setinput(e.target.value); // Updates the input state with the new value
  };

  // Function to add a new todo
  const add_todo = () => {
    if (input.trim()) {
      settodo([...todos, input]); // Adds the new todo to the list
      setinput(""); // Clears the input field
    }
  };

  // Function to remove a todo
  const remove_todo = (index) => {
    const updated_todos = todos.filter((_, i) => i !== index); // Creates a new list without the deleted todo
    settodo(updated_todos); // Updates the todos state with the new list
  };

  // Function to start editing a todo
  const updated_todo = (index) => {
    setEditing(index); // Sets the index of the todo being edited
  };

  // Function to save the edited todo
  const save_todo = () => {
    setEditing(null); // Clears the editing state
  };

  // Function to handle changes to the edited todo
  const edit_change = (e, index) => {
    const new_todo = todos.slice(); // Creates a copy of the todos array
    new_todo[index] = e.target.value; // Updates the specific todo
    settodo(new_todo); // Updates the todos state with the new array
  };

  // Function to handle the edit button click
  const edit_button = (index) => {
    if (Editing === index) {
      save_todo(); // If currently editing, save the todo
    } else {
      updated_todo(index); // Otherwise, start editing the todo
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">ToDo-List</h1>
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          value={input}
          onChange={input_todo}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={add_todo}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {Editing === index ? (
              <input
                type="text"
                value={todos[index]}
                onChange={(e) => edit_change(e, index)}
                className="input-field"
              />
            ) : (
              <span>{todo}</span>
            )}
            <div className="btn-group">
              <button
                className="btn btn-danger delete-btn"
                onClick={() => remove_todo(index)}
              >
                ✕
              </button>
              <button
                className="btn btn-primary edit-btn"
                onClick={() => edit_button(index)}
              >
                {Editing === index ? "✔" : "✎"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList2;


