import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'


const List = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <ul className='flex justify-start my-10 flex-col items-center gap-3'>
        {todos.map((todo)=>(
            <li key={todo.id}>{todo.text}
              <button className='bg-red-700 px-5 ml-5' onClick={() => dispatch(removeTodo(todo.id))}>REMOVE</button>
            </li>
        ))}
    </ul>
  )
}

export default List