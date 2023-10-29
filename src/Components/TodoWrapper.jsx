import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

const TodoWrapper = () => {
    const[todos,setTodos]=useState([])

    const addTodo =todo =>{
        setTodos([...todos,{id:uuidv4(),task:todo}])
        console.log(todos);
    }
    const deleteTodo=id=>{
        setTodos(todos.filter(todo=>todo.id !== id))
    }

  return (
    <div className="bg-indigo-900 mt-20 p-8 rounded-lg">

        <h1 className='flex justify-center text-4xl text-white mb-2 animate-bounce font-semibold '>Get things done !</h1>
        <TodoForm addTodo={addTodo}/>
        {/* <p className='text-white flex justify-center pb-7 '>No tasks has been added !</p> */}
        {
            todos.map((todo,index)=>(
                <Todo task={todo} key={index} deleteTodo={()=>deleteTodo(todo.id)}/>
            ))
        }
    </div>
  )
}

export default TodoWrapper