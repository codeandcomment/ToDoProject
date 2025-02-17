
import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
    const [todoList,setTodoList] = useState([]);

  return (
    <>
      <AddTodo  setTodoList={setTodoList}></AddTodo>
     { todoList.length > 0 && <TodoList todoList={todoList}></TodoList>}
    </>
  )
}

export default App
