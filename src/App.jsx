import { useState, useEffect } from 'react'
import createTask from './assets/createTask.png'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'
import Footer from './components/Footer'

import './App.css'

function App() {

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [sort, setSort] = useState('asc')
  const [todos,setTodos] = useState([])

  useEffect(() =>{
    const storedTodos = localStorage.getItem('todos')
    if(storedTodos){
      setTodos(JSON.parse(storedTodos))
    }
    localStorage.setItem('todos', JSON.stringify(todos))
  },[])
  
  const addTodo = (text, category) => {
    const newtodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false
      },
    ]
    setTodos(newtodos)
  }
  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filterTodo = newTodos.filter((todo) => todo.id !== id ? todo : null)

    setTodos(filterTodo)
  }
  const completeTodo = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='wrapper'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      {todos.length === 0 ?
      <div className='contentTaskimg'>
        <img src={createTask} alt="Task" className='imgTask' />
      </div>
      :
      <div className='todo-list'>
        {todos.filter((todo) =>
        filter === 'all' ? 
        true : filter === 'completas' ? 
        todo.isCompleted : !todo.isCompleted
        ).filter((todo) =>
         todo.text.toLowerCase().includes(search.toLowerCase())
        ).sort((a,b) =>
        sort === 'asc' ? b.text.localeCompare(a.text) : a.text.localeCompare(b.text)
        ).map((todo) => (
          <Todo 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}/>
        ))
        }
      </div>
      }
      <TodoForm addTodo={addTodo}/>

      </div>
      <Footer/>
    </div>
  )
}

export default App
