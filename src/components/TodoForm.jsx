import { useState } from 'react'

import './TodoFormStyle.css'

const TodoForm = ({addTodo}) => {

    const maxChars = 20
    const [formData, setFormData] = useState({
      estado: '',
      nome: ''
    })

    const handleSubmit = (e) =>{
        e.preventDefault()
      
        addTodo(formData.nome, formData.estado);
        setFormData({
        estado: '',
        nome: ''
        })
    }
    const handleChange = (e) =>{
      const {name, value} = e.target
      if(value.length <= maxChars){
        setFormData((prevFormData) =>({
          ...prevFormData,
          [name]: value
        }))
      }
    }

  return (
    <div className='todo-form'>
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <div className='createTask'>
            <input type="text" onChange={handleChange} name='nome' value={formData.nome} required maxLength={maxChars}/>
            <span>criar tarefas </span>
            {
              formData.nome.length === maxChars &&
              <p className='limite'>Limite de 20 caracteres atingido</p> 
            }
            </div>
            <div className='selectBox'>
            <select value={formData.estado} name='estado' onChange={handleChange} required>
                <option value=''>Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Estudos">Estudos</option>
            </select>
            </div>
            <button  className='btnTodoform' type='submit'>Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm