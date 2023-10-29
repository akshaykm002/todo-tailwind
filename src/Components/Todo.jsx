import React from 'react'

const Todo = ({task,deleteTodo}) => {
  return (
    <div className='flex justify-between items-center bg-purple-700 text-white p-3 rounded mb-4'>
        <p>{task.task}</p>
        <div>
        <button  onClick={()=>deleteTodo(task.id)} className='ml-3 '><i class="fa-solid fa-trash "></i></button>
        </div>
        
    </div>
  )
}

export default Todo