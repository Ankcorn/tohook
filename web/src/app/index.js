import React, { useState, useEffect } from 'react';
import api from '../api';

// class ErrorBoundry extends Component {
//   state = {
//     error: false
//   }
//   componentDidCatch(e) {
//     this.setState({ error: true, message: e.message })
//   }
//   render() {
//     return  this.state.error ? 'ERROR' + this.state.message : this.props.children;
//   }
// }

function useCustomHook() {
  const [ todos, setTodos ] = useState();
  
  useEffect(() => {
    getTodos()
  }, [])
  
  async function getTodos() {
    const todos = await api.getTodo()
    return setTodos(todos);
  }
  async function addTodo(description) {
    await api.addTodo(description);
    await getTodos()
  }
  async function updateTodo(id, object) {
    await api.updateTodo(id, object)
    await getTodos()
  }
  return [ todos, addTodo, updateTodo ]
}

function Todo() {
  const [ description, setDescription ] = useState('') 
  const [todos, addTodo, updateTodo ] = useCustomHook()

  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todos && todos.map(el=><li onClick={async (e) => await updateTodo(el._id, { done: !el.done})}>{JSON.stringify(el)}</li>)}
      </ul>
      <input type="text" value={description} onChange={e=>setDescription(e.target.value)}/>
      <button onClick={async (e)=> await addTodo(description)}>add</button>
    </div>
  )
}

export default Todo;