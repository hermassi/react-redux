import React from 'react';
import './App.css';
import AddTodo from "./Component/AddTodo/AddTodo";
import TodoLists from './Component/TodoLists/TodoLists';

const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoLists />
    </div>
  )
}

export default App;
