import { div } from 'prelude-ls';
import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => { 
      e.preventDefault();

      if (inputValue.trim() === '') return;


      setTodos([
      ...todos,
      {
        text:inputValue,
        id: uuidv4(),
      },
    ]);

  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className="container">
      
        <form onSubmit={addTodo}>
          <input 
            type="text"
            placeholder="Add a task..."
            value={inputValue}
            anChange={(e) => setInputValue(e.target.vale)}
          />
          <button type="submit">Add</button>
      </form>
      {todos.map((todo) => (
       <div key={todo.id} className="todo">
         <p> {todo.text}</p>
         <i onClick = {() => removeTodo(todo.id)} class="fas fa-trash-alt"></i>       
       </div>
      ))}s

    </div>
    </div>
  );
}

export default App;
