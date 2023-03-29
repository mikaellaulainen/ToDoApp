import { useState } from 'react'
import Todo from './components/Todo'

const App = () => {
  const [todos,setTodos] = useState([{ id:1,todo:'Walk dog' }, { id:2, todo:'Eat dinner' }])
  const [todo,setTodo] = useState('')

  const generateID = () => {
    if(todos.length === 0){
      return 1
    }else {
      return Math.max(...todos.map(item => item.id)) +1
    }
  }
  const addTodo = (e) => {
    e.preventDefault()
    const todoObject = {
      id:generateID(),
      todo: todo
    }
    setTodos(todos.concat(todoObject))
    setTodo('')
  }

  const removeTodo = id => {
    setTodos(todos.filter(i => i.id !== id))
  }

  return (
    <div className="App">
      <div className="todomachine">
        <p className='header'>To-do machine</p>
        <form className='todo-form' onSubmit={addTodo}>
          <div className="form-items">
            <input type="text" value={todo} onChange={({ target }) => setTodo(target.value)} placeholder='Add things you need to do'/>
            <button>Add</button>
          </div>
        </form>
        <div className="todos">
          {todos.map(item  =>
            <Todo key={item.id} item={item} removeTodo={removeTodo}/>
          )}
        </div>
        {todos.length > 0 &&
          <button className='clear-all' onClick={() => setTodos([])}>Remove all</button>
        }
      </div>
    </div>
  )
}

export default App