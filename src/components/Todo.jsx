import { useEffect } from 'react'
import './TodoStyle.css'

const Todo = ({todo, removeTodo, completeTodo}) => {
  
  return (
    <div className={todo.isCompleted === true ? 'completedTask' : 'todo'}  >
      <div>
        <p className='text'>{todo.text}</p>
        <p className='category'>{todo.category}</p>
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='remove' onClick={() => removeTodo(todo.id)}>X</button>
      </div>        
    </div>
  )
}

export default Todo