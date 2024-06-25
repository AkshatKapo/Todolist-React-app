import React from 'react'

const TodoList = () => {
  return (
    <div className='todo-list'>
        <h1>ToDo-List</h1>
        <input type='text' value={input} onChange={handlenputUpdate} placeholder='Add a new task'></input>


    </div>
  )
}

export default TodoList