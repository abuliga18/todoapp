import './App.css';
import React, { useState} from 'react';
import SearchBar from './features/SearchBar/SearchBar';
import Todo from './features/Todo/Todo';

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  const handleSubmit = (todo) => {
    setTodos(prevTodos => [...prevTodos, todo])
  }

  const handleEdit = (index) => {
    setTodoValue(todos[index])
    handleDelete(index)
  }

  const handleDelete = (index) => {

    const newTodos = todos.filter((todo, todoIndex)=> {
      return todoIndex !== index
    })

    setTodos(newTodos)
  } 

  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} todoValue={todoValue}/>
      {todos.map((todo, index) => {
        return (
          <Todo todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} key={index} index={index} />
        )
      })}
    </div>
  );

}

export default App;
