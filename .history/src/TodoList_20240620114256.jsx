import React from "react";
import { useState } from 'react';



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handlenputUpdate = (e) =>{
        setInput(e.target.value); 
    }
    const handleAddTodo = () =>{
        if(input.trim()){
            setTodos([...todos,input]);
            setInput('');
        }
    }
    const handleRemoveTodo=(index) => {
        const updated_todo = todos.filter((_, i) => i !== index);
        setTodos(updated_todo);
    }


  
  return (
    <div className="container mt-5">
      <h1 class="text-center mb-4">ToDo-List</h1>
      <input
        type="text"
        value={input}
        onChange={handlenputUpdate}
        placeholder="Add a new task"
      ></input>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
