const Todo = ({ item,removeTodo }) => {
  return (
    <div className='todo'>
      <p>{item.todo}</p>
      <button onClick={() => removeTodo(item.id)}>Remove</button>
    </div>
  )
}

export default Todo