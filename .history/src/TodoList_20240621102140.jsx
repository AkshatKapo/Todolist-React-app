import React, { useState } from "react";
import './TodoList.css'; // Import your custom CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [IsEditmode,setEditmode]= useState(false);
  const [currentindex,setcurrentindex] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value); 
  }

  const handleAddTodo = () => {
    if (input.trim()) {
      if(IsEditmode){
        const updated_list = todos.map((todo,index)(
          index == currentindex ? todo:input
        ));
        setTodos(updated_list);
        setEditmode(false);
        setcurrentindex(null);
        
      }
      else {
      setTodos([...todos, input]);
      setInput('');
    }
  }

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  const handlechangeTodo = (index) => {
    const changeTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
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
        <button className="btn btn-primary" onClick={handleAddTodo}>Add</button>
      </div>

      <ul className="list-group">
        {todos.map((todo, index) => (
          <li key={index} className="list-group-item">
            {todo}
            <div className="btn-group">
              <button className="btn btn-danger delete-btn" onClick={() => handleRemoveTodo(index)}>✕</button>
              <button className="btn btn-primary edit-btn" onClick={() => handlechangeTodo(index)}>✎</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
