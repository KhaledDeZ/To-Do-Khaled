import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todos,settodos] = useState([])
  const inputRef = useRef()

  const AddToDo = () => {
  const text = inputRef.current.value
  const newitem = {completed: false, text} 
  settodos([...todos, newitem])
  inputRef.current.value = ""
  }

  const ItemDone = (index) => {
    const newtodo = [...todos]
    newtodo[index].completed = !newtodo[index].completed
    settodos(newtodo)
  }

  const ItemDelete = (index) => {
    const newtodo = [...todos]
    newtodo.splice(index,1)
    settodos(newtodo)
  }
  return (
  <div className='App'>
    <h1>To-Do-List</h1>
    <ul>
      {todos.map(({text,completed},index) => {
      return <div className="delete">
             <li className={completed ? "done" : ""} onClick={() => ItemDone(index)} key={index}>{text}</li>
             <span className="trash" onClick={() => ItemDelete(index)}>❌</span>
             </div>
      })}
    </ul>
    <input ref={inputRef} placeholder='Enter item...'/>
    <button onClick={AddToDo}>Add</button>
  </div>
  )
}

export default App;
