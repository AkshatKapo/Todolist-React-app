import React, { useState } from 'react'

const TodoList2 = () => {

  const [todos,settodo] = useState([]);
  return (
    <div className="container mt-5">
         <h1 className="mb-4">ToDo-List</h1>
         <div className="input-group">
            <input type='text' className='input-group'  value={input} onChange={input_todo} placeholder='Add a new task'></input>
            <button className='btn btn-primary' onClick={add_todo}>Add</button>
         </div>
         <ul className='list-group'>
            {todos.map((todo,index)=>{

            )}

         </ul>


    </div>
  )
}

export default TodoList2