import React from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const 

  
  return (
    <div className="todo-list">
      <h1>ToDo-List</h1>
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
