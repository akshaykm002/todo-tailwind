import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTodo(value);

        setValue('')

    }
  return (
   <>
   <form onSubmit={handleSubmit} className="w-full mb-4">

    <input onChange={(e)=>setValue(e.target.value)} type="text" value={value} className='outline-none bg-transparent border border-purple-700 px-4 py-2 mt-4 mb-8 w-50 text-white' placeholder="What're the tasks today" />
    <button type='sumbit' className='bg-purple-700 text-white border-none py-2 px-3 rounded cursor-pointer animate-pulse'>Add task</button>
   </form>
   </>
  )
}
<input className="outline-none bg-transparent border border-purple-700 px-4 py-2 mt-4 mb-8 w-48 text-white" type="text" />

export default TodoForm
