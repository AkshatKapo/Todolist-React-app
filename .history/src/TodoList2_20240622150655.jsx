import React, { useEffect, useState } from "react";
import './TodoList.css'; // Import your custom CSS file


const TodoList2 = () => {
  const [todos, settodo] = useState([]);
  const [input,setinput]= useState('');
  const [Editing,setEditing] = useState(null);


  const input_todo =(e)=>{

    setinput(e.target.value); // updates the state of input so that input will keep updated whe a user adds a new task
    
  }
  const add_todo =()=>{
  
    if (input.trim()){
    settodo([...todos,input]);// updates the todo list to store the new task(input) to the list.
    setinput('');// updates the input to make it empty so that it can store new task.
    }
  }
  const remove_todo =(index)=>{
    const updated_todos = todos.filter((_,i) => i !== index );// basically it creates a new list(updated_todo), which stores elements whose index does not match with the index of the element that has to be deleted,
    // basically it will create a new list of todos which  will not contain the element that has to be deleted.
    settodo(updated_todos); // stores the new list n the todo list.

  }
  const updated_todo=(index)=>{

  }
  const save_todo=()=>{
    setEditing(null);

  }
  const edit_change = (index)=>{

  }
  const edit_button = (index)=>{
    if(Editing === index){
      save_todo();
    }
    else {



    }

  }



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
            {Editing === index ? (<input
              type="text"
              value={todos[index]}
              onChange={(e) => edit_change(e,index)}
              className="input-field"
            
          />  
          ):
          (
            <span>{todo}</span>
          )
          }
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
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList2;
